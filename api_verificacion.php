<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once __DIR__ . '/config-seguridad.php';

// Configuración (centralizada en config-seguridad.php)
$host = DB_HOST;
$user = DB_USER;
$password = DB_PASSWORD;
$db = DB_NAME;

// Remitente configurado en hosting
$email_usuario = EMAIL_FROM;

$method = $_SERVER['REQUEST_METHOD'];
$action = trim($_GET['action'] ?? '');
$client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_CLIENT_IP'] ?? $_SERVER['REMOTE_ADDR'];

$conn = mysqli_connect($host, $user, $password, $db);
if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo conectar a la base de datos.']);
    exit;
}
mysqli_set_charset($conn, 'utf8mb4');

// ============================================
// 1. ENVIAR CÓDIGO DE VERIFICACIÓN POR EMAIL
// ============================================
if ($method === 'POST' && $action === 'enviar_codigo') {
    $email = trim($_POST['email'] ?? '');
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Correo electrónico inválido.']);
        exit;
    }

    // Validar rate limiting: máximo 3 intentos por email en 24 horas
    $checkLimitStmt = mysqli_prepare($conn, 
        "SELECT COUNT(*) as intentos FROM rate_limit 
         WHERE email = ? AND tipo_intento = 'verificacion' 
         AND fecha_intento > DATE_SUB(NOW(), INTERVAL 24 HOUR)"
    );
    mysqli_stmt_bind_param($checkLimitStmt, 's', $email);
    mysqli_stmt_execute($checkLimitStmt);
    $limitResult = mysqli_stmt_get_result($checkLimitStmt);
    $limitRow = mysqli_fetch_assoc($limitResult);
    mysqli_stmt_close($checkLimitStmt);

    if ($limitRow['intentos'] >= 3) {
        http_response_code(429);
        echo json_encode(['error' => 'Demasiados intentos. Intenta más tarde.']);
        exit;
    }

    // Validar rate limiting: máximo 5 intentos por IP en 1 hora
    $checkIpLimitStmt = mysqli_prepare($conn,
        "SELECT COUNT(*) as intentos FROM rate_limit 
         WHERE ip_address = ? AND tipo_intento = 'verificacion'
         AND fecha_intento > DATE_SUB(NOW(), INTERVAL 1 HOUR)"
    );
    mysqli_stmt_bind_param($checkIpLimitStmt, 's', $client_ip);
    mysqli_stmt_execute($checkIpLimitStmt);
    $ipLimitResult = mysqli_stmt_get_result($checkIpLimitStmt);
    $ipLimitRow = mysqli_fetch_assoc($ipLimitResult);
    mysqli_stmt_close($checkIpLimitStmt);

    if ($ipLimitRow['intentos'] >= 5) {
        http_response_code(429);
        echo json_encode(['error' => 'Demasiados intentos desde tu IP. Intenta más tarde.']);
        exit;
    }

    // Generar código único de 6 dígitos
    $codigo = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
    $expiracion = date('Y-m-d H:i:s', strtotime('+15 minutes'));

    // Verificar si ya existe código pendiente para este email
    $checkCodeStmt = mysqli_prepare($conn,
        "SELECT id FROM email_verificaciones 
         WHERE email = ? AND verificado = FALSE 
         AND fecha_expiracion > NOW()"
    );
    mysqli_stmt_bind_param($checkCodeStmt, 's', $email);
    mysqli_stmt_execute($checkCodeStmt);
    $checkCodeResult = mysqli_stmt_get_result($checkCodeStmt);
    mysqli_stmt_close($checkCodeStmt);

    if (mysqli_num_rows($checkCodeResult) > 0) {
        // Actualizar código existente
        $updateStmt = mysqli_prepare($conn,
            "UPDATE email_verificaciones 
             SET codigo = ?, fecha_expiracion = ?, fecha_creacion = NOW(), intentos = 0
             WHERE email = ? AND verificado = FALSE"
        );
        mysqli_stmt_bind_param($updateStmt, 'sss', $codigo, $expiracion, $email);
        mysqli_stmt_execute($updateStmt);
        mysqli_stmt_close($updateStmt);
    } else {
        // Insertar nuevo código
        $insertStmt = mysqli_prepare($conn,
            "INSERT INTO email_verificaciones (email, codigo, fecha_expiracion) 
             VALUES (?, ?, ?)"
        );
        mysqli_stmt_bind_param($insertStmt, 'sss', $email, $codigo, $expiracion);
        if (!mysqli_stmt_execute($insertStmt)) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al generar código de verificación.']);
            mysqli_stmt_close($insertStmt);
            exit;
        }
        mysqli_stmt_close($insertStmt);
    }

    // Registrar intento de verificación
    $logStmt = mysqli_prepare($conn,
        "INSERT INTO rate_limit (ip_address, email, tipo_intento, exitoso) 
         VALUES (?, ?, 'verificacion', TRUE)"
    );
    mysqli_stmt_bind_param($logStmt, 'ss', $client_ip, $email);
    mysqli_stmt_execute($logStmt);
    mysqli_stmt_close($logStmt);

    // ============================================
    // ENVIAR EMAIL OTP (HTML + TEXTO PLANO)
    // ============================================
    $asunto = "Codigo de Verificacion - Universidad Carolina";
    $logoUrl = "https://ucampus.lat/universidad-carolina-logo.png";
    $correoSoporte = "admisiones@ucarolina.mx";

    $textoPlano =
        "Universidad Carolina\n\n" .
        "Tu codigo de verificacion para agendar una cita es: " . $codigo . "\n\n" .
        "Este codigo expira en 15 minutos.\n" .
        "No compartas este codigo con nadie.\n\n" .
        "Si no solicitaste este codigo, ignora este correo.\n" .
        "Soporte: " . $correoSoporte . "\n";

    $cuerpoHtml = "
<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Codigo de Verificacion</title>
</head>
<body style='margin:0;padding:0;background:#f3f6fb;font-family:Segoe UI,Arial,sans-serif;color:#1f2c3b;'>
    <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='background:#f3f6fb;padding:24px 0;'>
        <tr>
            <td align='center'>
                <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e3e9f0;'>
                    <tr>
                        <td style='background:linear-gradient(135deg,#1f3b63,#274f85);padding:22px 26px;text-align:center;'>
                            <img src='" . $logoUrl . "' alt='Universidad Carolina' style='max-width:180px;width:100%;height:auto;display:inline-block;'>
                            <p style='margin:12px 0 0 0;color:#dbe8ff;font-size:13px;'>Sistema de citas con verificacion segura</p>
                        </td>
                    </tr>
                    <tr>
                        <td style='padding:28px 26px;'>
                            <h1 style='margin:0 0 12px 0;font-size:23px;color:#1f2c3b;'>Codigo de Verificacion</h1>
                            <p style='margin:0 0 18px 0;font-size:15px;line-height:1.6;color:#425568;'>Hola, para continuar con tu cita utiliza el siguiente codigo:</p>

                            <div style='text-align:center;margin:18px 0 20px 0;'>
                                <span style='display:inline-block;padding:14px 22px;border-radius:10px;background:#edf4ff;border:1px solid #c9daf7;font-size:34px;letter-spacing:8px;font-weight:700;color:#173a73;'>" . $codigo . "</span>
                            </div>

                            <p style='margin:0 0 10px 0;font-size:14px;color:#425568;'><strong>Este codigo expira en 15 minutos.</strong></p>
                            <p style='margin:0;font-size:14px;color:#425568;'>No compartas este codigo con nadie.</p>

                            <hr style='margin:22px 0;border:none;border-top:1px solid #e6ecf3;'>
                            <p style='margin:0 0 8px 0;font-size:13px;line-height:1.5;color:#687b92;'>Si no solicitaste este codigo, puedes ignorar este correo con seguridad.</p>
                            <p style='margin:0;font-size:13px;color:#687b92;'>Soporte: <a href='mailto:" . $correoSoporte . "' style='color:#2a5ea4;text-decoration:none;'>" . $correoSoporte . "</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td style='background:#f7f9fc;padding:14px 20px;text-align:center;'>
                            <p style='margin:0;font-size:12px;color:#7a8ea7;'>Este correo es automatico. Por favor no respondas a este mensaje.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    ";

    $boundary = "=_Part_" . md5((string)microtime(true));
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . EMAIL_FROM_NAME . " <" . $email_usuario . ">\r\n";
    $headers .= "Reply-To: " . $correoSoporte . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"" . $boundary . "\"\r\n";

    $mensaje = "--" . $boundary . "\r\n";
    $mensaje .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mensaje .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $mensaje .= $textoPlano . "\r\n\r\n";
    $mensaje .= "--" . $boundary . "\r\n";
    $mensaje .= "Content-Type: text/html; charset=UTF-8\r\n";
    $mensaje .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $mensaje .= $cuerpoHtml . "\r\n\r\n";
    $mensaje .= "--" . $boundary . "--";

    // En varios hostings (incluyendo Namecheap) ayuda definir envelope sender con -f.
    $mailParams = '-f' . $email_usuario;
    $enviado = @mail($email, $asunto, $mensaje, $headers, $mailParams);

    if (!$enviado) {
        // Fallback sin parametro adicional por compatibilidad de servidor.
        $enviado = @mail($email, $asunto, $mensaje, $headers);
    }

    if (!$enviado) {
        $ultimoError = error_get_last();
        if ($ultimoError && isset($ultimoError['message'])) {
            error_log('Fallo mail() api_verificacion.php: ' . $ultimoError['message']);
        } else {
            error_log('Fallo mail() api_verificacion.php sin detalle de error_get_last().');
        }
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo enviar el correo de verificacion.']);
        mysqli_close($conn);
        exit;
    }

    http_response_code(200);
    echo json_encode([
        'mensaje' => 'Código de verificación enviado al correo.',
        'email_enmascarado' => substr($email, 0, 2) . '***' . substr($email, strrpos($email, '@'))
    ]);

    mysqli_close($conn);
    exit;
}

// ============================================
// 2. VALIDAR CÓDIGO DE VERIFICACIÓN
// ============================================
if ($method === 'POST' && $action === 'validar_codigo') {
    $email = trim($_POST['email'] ?? '');
    $codigo = trim($_POST['codigo'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Correo electrónico inválido.']);
        exit;
    }

    if (strlen($codigo) !== 6 || !ctype_digit($codigo)) {
        http_response_code(400);
        echo json_encode(['error' => 'Código debe ser 6 dígitos.']);
        exit;
    }

    // Validar rate limiting: máximo 10 intentos por email en 15 minutos
    $checkAttackStmt = mysqli_prepare($conn,
        "SELECT COUNT(*) as intentos FROM rate_limit 
         WHERE email = ? AND tipo_intento = 'verificacion'
         AND fecha_intento > DATE_SUB(NOW(), INTERVAL 15 MINUTE)"
    );
    mysqli_stmt_bind_param($checkAttackStmt, 's', $email);
    mysqli_stmt_execute($checkAttackStmt);
    $attackResult = mysqli_stmt_get_result($checkAttackStmt);
    $attackRow = mysqli_fetch_assoc($attackResult);
    mysqli_stmt_close($checkAttackStmt);

    if ($attackRow['intentos'] >= 10) {
        http_response_code(429);
        echo json_encode(['error' => 'Demasiados intentos fallidos. Solicita un nuevo código.']);
        exit;
    }

    // Buscar código válido
    $checkStmt = mysqli_prepare($conn,
        "SELECT id, intentos FROM email_verificaciones 
         WHERE email = ? AND codigo = ? AND verificado = FALSE 
         AND fecha_expiracion > NOW()"
    );
    mysqli_stmt_bind_param($checkStmt, 'ss', $email, $codigo);
    mysqli_stmt_execute($checkStmt);
    $result = mysqli_stmt_get_result($checkStmt);
    mysqli_stmt_close($checkStmt);

    if (mysqli_num_rows($result) === 0) {
        // Incrementar intentos fallidos
        $updateStmt = mysqli_prepare($conn,
            "UPDATE email_verificaciones 
             SET intentos = intentos + 1 
             WHERE email = ?"
        );
        mysqli_stmt_bind_param($updateStmt, 's', $email);
        mysqli_stmt_execute($updateStmt);
        mysqli_stmt_close($updateStmt);

        http_response_code(400);
        echo json_encode(['error' => 'Código incorrecto o expirado.']);
        exit;
    }

    // Marcar como verificado
    $updateStmt = mysqli_prepare($conn,
        "UPDATE email_verificaciones 
         SET verificado = TRUE 
         WHERE email = ? AND codigo = ?"
    );
    mysqli_stmt_bind_param($updateStmt, 'ss', $email, $codigo);
    mysqli_stmt_execute($updateStmt);
    mysqli_stmt_close($updateStmt);

    // Generar token de sesión temporal
    $token_session = bin2hex(random_bytes(32));
    $_SESSION['email_verificado_' . $email] = $token_session;
    $_SESSION['email_verificado_' . $email . '_exp'] = time() + 3600; // 1 hora

    http_response_code(200);
    echo json_encode([
        'mensaje' => 'Email verificado correctamente.',
        'token' => $token_session
    ]);

    mysqli_close($conn);
    exit;
}

// ============================================
// 3. VERIFICAR SI EMAIL YA ESTÁ VERIFICADO
// ============================================
if ($method === 'GET' && $action === 'estado_email') {
    $email = trim($_GET['email'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Correo electrónico inválido.']);
        exit;
    }

    $checkStmt = mysqli_prepare($conn,
        "SELECT verificado FROM email_verificaciones 
         WHERE email = ? AND fecha_expiracion > NOW()
         ORDER BY fecha_creacion DESC LIMIT 1"
    );
    mysqli_stmt_bind_param($checkStmt, 's', $email);
    mysqli_stmt_execute($checkStmt);
    $result = mysqli_stmt_get_result($checkStmt);
    mysqli_stmt_close($checkStmt);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        http_response_code(200);
        echo json_encode(['verificado' => (bool)$row['verificado']]);
    } else {
        http_response_code(200);
        echo json_encode(['verificado' => false]);
    }

    mysqli_close($conn);
    exit;
}

// Error si no hay acción válida
http_response_code(400);
echo json_encode(['error' => 'Acción no válida.']);
mysqli_close($conn);
?>
