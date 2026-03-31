<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

$host = 'localhost';
$user = 'ucamzqgl_ArmandoBltran';
$password = 'SABJ081125HCLNLNA1';
$db = 'ucamzqgl_Citas';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo no permitido. Usa POST.']);
    exit;
}

$client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_CLIENT_IP'] ?? $_SERVER['REMOTE_ADDR'];
$score = (int)($_POST['score'] ?? 0);
$hardMode = (int)($_POST['hard_mode'] ?? 0);

if ($hardMode !== 1 || $score < 250) {
    http_response_code(400);
    echo json_encode(['error' => 'Debes alcanzar 250 puntos en modo dificil para desbloquear.']);
    exit;
}

$conn = mysqli_connect($host, $user, $password, $db);
if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo conectar a la base de datos.']);
    exit;
}

mysqli_set_charset($conn, 'utf8mb4');
$desbloqueadoHasta = date('Y-m-d H:i:s', strtotime('+24 hours'));

$stmt = mysqli_prepare($conn,
    'INSERT INTO segunda_oportunidad (ip_address, score, hard_mode, desbloqueado_hasta, usado) VALUES (?, ?, TRUE, ?, FALSE)
     ON DUPLICATE KEY UPDATE score = VALUES(score), hard_mode = TRUE, desbloqueado_hasta = VALUES(desbloqueado_hasta), usado = FALSE'
);

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo preparar el desbloqueo.']);
    mysqli_close($conn);
    exit;
}

mysqli_stmt_bind_param($stmt, 'sis', $client_ip, $score, $desbloqueadoHasta);

if (!mysqli_stmt_execute($stmt)) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo registrar la segunda oportunidad.']);
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
    exit;
}

mysqli_stmt_close($stmt);
mysqli_close($conn);

http_response_code(200);
echo json_encode([
    'mensaje' => 'Segunda oportunidad desbloqueada por 24 horas.',
    'desbloqueado_hasta' => $desbloqueadoHasta
]);
