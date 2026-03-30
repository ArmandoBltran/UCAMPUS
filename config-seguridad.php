<?php
/**
 * Configuración del Sistema de Seguridad de Citas
 * Archivo: config-seguridad.php
 * 
 * Este archivo centraliza todas las configuraciones de seguridad.
 * Importar este archivo en los APIs con: require_once('config-seguridad.php');
 */

// ============================================
// CONFIGURACIÓN DE RECAPTCHA V3
// ============================================
define('RECAPTCHA_SECRET', '6LdhxZ4sAAAAAMaQg3z-ppMVubRB5MTnZ2IVfxQy'); // Obtener de https://www.google.com/recaptcha/admin
define('RECAPTCHA_PUBLIC', '6LdhxZ4sAAAAAN6dHMBoE7KzYNnYR_7439b9pjwe');
define('RECAPTCHA_MIN_SCORE', 0.5); // Valor mínimo aceptado (0.0 a 1.0)

// ============================================
// CONFIGURACIÓN DE BASE DE DATOS
// ============================================
define('DB_HOST', 'localhost');
define('DB_USER', 'ucamzqgl_ArmandoBltran');
define('DB_PASSWORD', 'SABJ081125HCLNLNA1');
define('DB_NAME', 'ucamzqgl_Citas');

// ============================================
// CONFIGURACIÓN DE EMAIL
// ============================================
define('SMTP_HOST', 'ucampus.lat'); // o tu servidor SMTP
define('SMTP_PORT', 465);
define('SMTP_USER', 'noreply@ucampus.lat'); // Cambiar
define('SMTP_PASSWORD', '081125JASB2026'); // Cambiar (usar contraseña de app si es Gmail)
define('EMAIL_FROM', 'noreply@ucampus.lat');
define('EMAIL_FROM_NAME', 'Universidad Carolina');

// ============================================
// CONFIGURACIÓN DE RATE LIMITING
// ============================================

// Por Email
define('RATE_LIMIT_EMAIL_ENVIOS_24H', 3); // Max intentos de envío en 24 horas
define('RATE_LIMIT_EMAIL_VALIDACIONES_15M', 10); // Max intentos de validación en 15 minutos
define('RATE_LIMIT_CITAS_POR_USUARIO_7D', 5); // Max citas por usuario en 7 días

// Por IP
define('RATE_LIMIT_IP_VERIFICACIONES_1H', 5); // Max intentos de verificación por IP en 1 hora
define('RATE_LIMIT_IP_CITAS_24H', 10); // Max citas por IP en 24 horas

// ============================================
// CONFIGURACIÓN DE CÓDIGOS OTP
// ============================================
define('OTP_LENGTH', 6); // Longitud del código (6 dígitos)
define('OTP_EXPIRATION_MINUTES', 15); // Minutos que expira el código

// ============================================
// CONFIGURACIÓN DE SESIÓN
// ============================================
define('SESSION_VERIFICATION_EXPIRY', 3600); // 1 hora en segundos
define('SESSION_SECURE', true); // Usar solo HTTPS (cambiar a true en producción)
define('SESSION_HTTPONLY', true); // No accesible desde JavaScript

// ============================================
// CONFIGURACIÓN DE SERVICIOS PERMITIDOS
// ============================================
$SERVICIOS_PERMITIDOS = [
    'inscripcion' => 'Inscripción',
    'constancia' => 'Constancia',
    'beca' => 'Beca',
    'club' => 'Club',
    'asesoria' => 'Asesoría'
];

// ============================================
// MENSAJES PERSONALIZADOS
// ============================================
define('MSG_EMAIL_INVALIDO', 'Correo electrónico inválido.');
define('MSG_RATE_LIMIT_EMAIL', 'Demasiados intentos. Intenta más tarde.');
define('MSG_RATE_LIMIT_IP', 'Demasiadas solicitudes desde tu IP. Intenta más tarde.');
define('MSG_CODIGO_ENVIADO', 'Código de verificación enviado.');
define('MSG_CODIGO_VALIDO', 'Email verificado correctamente.');
define('MSG_CODIGO_INVALIDO', 'Código incorrecto o expirado.');
define('MSG_CAPTCHA_FALLIDO', 'Validación CAPTCHA fallida.');
define('MSG_EMAIL_NO_VERIFICADO', 'Email no verificado.');
define('MSG_CITA_EXITOSA', 'Cita programada con éxito.');
define('MSG_HORARIO_OCUPADO', 'Ese horario ya está ocupado.');
define('MSG_LIMITE_CITAS_ALCANZADO', 'Has alcanzado el límite de citas.');

// ============================================
// HELPER PARA CONEXIÓN A BD
// ============================================
function conectar_db() {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    
    if (!$conn) {
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo conectar a la base de datos.']);
        exit;
    }
    
    mysqli_set_charset($conn, 'utf8mb4');
    return $conn;
}

// ============================================
// HELPER PARA OBTENER IP DEL CLIENTE
// ============================================
function obtener_ip_cliente() {
    return $_SERVER['HTTP_X_FORWARDED_FOR'] ?? 
           $_SERVER['HTTP_CLIENT_IP'] ?? 
           $_SERVER['REMOTE_ADDR'] ?? 
           '0.0.0.0';
}

// ============================================
// HELPER PARA RESPUESTA JSON
// ============================================
function responder_json($data, $http_code = 200) {
    header('Content-Type: application/json; charset=UTF-8');
    http_response_code($http_code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

// ============================================
// HELPER PARA GENERAR OTP
// ============================================
function generar_otp($longitud = OTP_LENGTH) {
    return str_pad(random_int(0, pow(10, $longitud) - 1), $longitud, '0', STR_PAD_LEFT);
}

// ============================================
// HELPER PARA LOG DE INTENTOS
// ============================================
function registrar_intento($conn, $ip, $email, $tipo, $exitoso = true) {
    $stmt = mysqli_prepare($conn,
        "INSERT INTO rate_limit (ip_address, email, tipo_intento, exitoso) 
         VALUES (?, ?, ?, ?)"
    );
    
    $exitoso_int = $exitoso ? 1 : 0;
    mysqli_stmt_bind_param($stmt, 'ssbi', $ip, $email, $tipo, $exitoso_int);
    
    if (!mysqli_stmt_execute($stmt)) {
        error_log("Error registrando intento: " . mysqli_error($conn));
    }
    
    mysqli_stmt_close($stmt);
}

// ============================================
// VALIDACIONES
// ============================================

function validar_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function validar_servicio($servicio, $servicios_permitidos) {
    return in_array($servicio, array_keys($servicios_permitidos), true);
}

function validar_fecha($fecha) {
    $dateObj = DateTime::createFromFormat('Y-m-d H:i:s', $fecha);
    return $dateObj && $dateObj->format('Y-m-d H:i:s') === $fecha;
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Iniciar sesión con configuraciones de seguridad
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => SESSION_VERIFICATION_EXPIRY,
        'path' => '/',
        'domain' => $_SERVER['HTTP_HOST'] ?? '',
        'secure' => SESSION_SECURE,
        'httponly' => SESSION_HTTPONLY,
        'samesite' => 'Lax'
    ]);
    session_start();
}

// Establecer headers de seguridad
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');

?>
