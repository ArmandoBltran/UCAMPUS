<?php
header('Content-Type: application/json; charset=UTF-8');

// Datos de la base de datos
$host = 'localhost';
$user = 'ucamzqgl_ArmandoBltran';
$password = 'SABJ081125HCLNLNA1';
$db = 'ucamzqgl_Citas';

// Clave de reCAPTCHA v2
$recaptcha_secret = '6LdhxZ4sAAAAAMaQg3z-ppMVubRB5MTnZ2IVfxQy';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo no permitido. Usa POST.']);
    exit;
}

$client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_CLIENT_IP'] ?? $_SERVER['REMOTE_ADDR'];

// Recibir y limpiar datos de la web
$nombre = trim($_POST['nombre'] ?? '');
$email = trim($_POST['email'] ?? '');
$servicio = trim($_POST['servicio'] ?? '');
$fecha = trim($_POST['fecha'] ?? '');
$recaptcha_token = trim($_POST['recaptcha_token'] ?? ($_POST['g-recaptcha-response'] ?? ''));

if ($nombre === '' || $email === '' || $servicio === '' || $fecha === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan campos obligatorios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Correo electrónico inválido.']);
    exit;
}

$serviciosPermitidos = ['inscripcion', 'constancia', 'beca', 'club', 'asesoria'];
if (!in_array($servicio, $serviciosPermitidos, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Servicio inválido.']);
    exit;
}

$fechaObj = DateTime::createFromFormat('Y-m-d H:i:s', $fecha);
$fechaValida = $fechaObj && $fechaObj->format('Y-m-d H:i:s') === $fecha;
if (!$fechaValida) {
    http_response_code(400);
    echo json_encode(['error' => 'Formato de fecha inválido.']);
    exit;
}

// ============================================
// VALIDAR CAPTCHA
// ============================================
if (empty($recaptcha_token)) {
    http_response_code(400);
    echo json_encode(['error' => 'CAPTCHA no validado.']);
    exit;
}

$captcha_response = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, 
    stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query([
                'secret' => $recaptcha_secret,
                'response' => $recaptcha_token
            ])
        ]
    ])
);

if (!$captcha_response) {
    http_response_code(500);
    echo json_encode(['error' => 'Error validando CAPTCHA. Intenta de nuevo.']);
    exit;
}

$captcha_data = json_decode($captcha_response, true);

if (!isset($captcha_data['success']) || !$captcha_data['success']) {
    http_response_code(400);
    echo json_encode(['error' => 'Validación CAPTCHA fallida. Intenta de nuevo.']);
    exit;
}

// Si Google envía score (v3), se aplica umbral. En checkbox (v2) normalmente no hay score.
if (isset($captcha_data['score']) && (float)$captcha_data['score'] < 0.5) {
    http_response_code(400);
    echo json_encode(['error' => 'Validación CAPTCHA fallida. Intenta de nuevo.']);
    exit;
}

// Registrar intento de CAPTCHA
$conn = mysqli_connect($host, $user, $password, $db);
if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo conectar a la base de datos.']);
    exit;
}
mysqli_set_charset($conn, 'utf8mb4');

$captcha_score = $captcha_data['score'] ?? '';
$logStmt = mysqli_prepare($conn,
    "INSERT INTO captcha_log (ip_address, token_score, resultado) 
     VALUES (?, ?, TRUE)"
);
mysqli_stmt_bind_param($logStmt, 'sd', $client_ip, $captcha_score);
mysqli_stmt_execute($logStmt);
mysqli_stmt_close($logStmt);

// ============================================
// VALIDAR RATE LIMITING
// ============================================

// Máximo 5 citas por email en 7 días
$checkEmailLimitStmt = mysqli_prepare($conn,
    "SELECT COUNT(*) as citas FROM citas 
     WHERE email = ? AND fecha_creacion > DATE_SUB(NOW(), INTERVAL 7 DAY)"
);
mysqli_stmt_bind_param($checkEmailLimitStmt, 's', $email);
mysqli_stmt_execute($checkEmailLimitStmt);
$emailLimitResult = mysqli_stmt_get_result($checkEmailLimitStmt);
$emailLimitRow = mysqli_fetch_assoc($emailLimitResult);
mysqli_stmt_close($checkEmailLimitStmt);

if ($emailLimitRow['citas'] >= 5) {
    http_response_code(429);
    echo json_encode(['error' => 'Has alcanzado el límite de citas. Máximo 5 por semana.']);
    exit;
}

// Máximo 10 citas por IP en 24 horas
$checkIpLimitStmt = mysqli_prepare($conn,
    "SELECT COUNT(*) as citas FROM citas 
     WHERE ip_creacion = ? AND fecha_creacion > DATE_SUB(NOW(), INTERVAL 1 DAY)"
);
mysqli_stmt_bind_param($checkIpLimitStmt, 's', $client_ip);
mysqli_stmt_execute($checkIpLimitStmt);
$ipLimitResult = mysqli_stmt_get_result($checkIpLimitStmt);
$ipLimitRow = mysqli_fetch_assoc($ipLimitResult);
mysqli_stmt_close($checkIpLimitStmt);

if ($ipLimitRow['citas'] >= 10) {
    http_response_code(429);
    echo json_encode(['error' => 'Demasiados intentos desde esta IP. Intenta más tarde.']);
    exit;
}

// ============================================
// VALIDAR DISPONIBILIDAD DE HORARIO
// ============================================
$checkStmt = mysqli_prepare($conn, 'SELECT id FROM citas WHERE fecha_hora = ? LIMIT 1');
if (!$checkStmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al validar disponibilidad de horario.']);
    mysqli_close($conn);
    exit;
}

mysqli_stmt_bind_param($checkStmt, 's', $fecha);
mysqli_stmt_execute($checkStmt);
mysqli_stmt_store_result($checkStmt);

if (mysqli_stmt_num_rows($checkStmt) > 0) {
    http_response_code(409);
    echo json_encode(['error' => 'Ese horario ya está ocupado. Elige otro.']);
    mysqli_stmt_close($checkStmt);
    mysqli_close($conn);
    exit;
}

mysqli_stmt_close($checkStmt);

// ============================================
// INSERTAR CITA
// ============================================
$stmt = mysqli_prepare($conn, 
    'INSERT INTO citas (`name`, email, servicio, fecha_hora, verificado, ip_creacion) 
     VALUES (?, ?, ?, ?, TRUE, ?)'
);
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al preparar la consulta.']);
    mysqli_close($conn);
    exit;
}

mysqli_stmt_bind_param($stmt, 'sssss', $nombre, $email, $servicio, $fecha, $client_ip);

if (mysqli_stmt_execute($stmt)) {
    http_response_code(200);
    echo json_encode(['mensaje' => 'Cita programada con éxito.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo guardar la cita.']);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>