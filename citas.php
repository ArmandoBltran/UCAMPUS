<?php
declare(strict_types=1);

header('Content-Type: text/plain; charset=UTF-8');

// Datos de la base de datos
$host = 'localhost';
$user = 'ucamzqgl_ArmandoBltran';
$password = 'Yvk4b85ELs4aGhD';
$db = 'ucamzqgl_Citas';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Metodo no permitido. Usa POST.';
    exit;
}

// Recibir y limpiar datos de la web
$nombre = trim($_POST['nombre'] ?? '');
$email = trim($_POST['email'] ?? '');
$servicio = trim($_POST['servicio'] ?? '');
$fecha = trim($_POST['fecha'] ?? ''); // Formato esperado: YYYY-MM-DD HH:MM:SS

if ($nombre === '' || $email === '' || $servicio === '' || $fecha === '') {
    http_response_code(400);
    echo 'Faltan campos obligatorios.';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Correo electronico invalido.';
    exit;
}

$serviciosPermitidos = ['inscripcion', 'constancia', 'beca', 'asesoria'];
if (!in_array($servicio, $serviciosPermitidos, true)) {
    http_response_code(400);
    echo 'Servicio invalido.';
    exit;
}

$fechaObj = DateTime::createFromFormat('Y-m-d H:i:s', $fecha);
$fechaValida = $fechaObj && $fechaObj->format('Y-m-d H:i:s') === $fecha;
if (!$fechaValida) {
    http_response_code(400);
    echo 'Formato de fecha invalido.';
    exit;
}

$conn = mysqli_connect($host, $user, $password, $db);
if (!$conn) {
    http_response_code(500);
    echo 'No se pudo conectar a la base de datos.';
    exit;
}

mysqli_set_charset($conn, 'utf8mb4');

$stmt = mysqli_prepare($conn, 'INSERT INTO citas (name, email, servicio, fecha_hora) VALUES (?, ?, ?, ?)');
if (!$stmt) {
    http_response_code(500);
    echo 'Error al preparar la consulta.';
    mysqli_close($conn);
    exit;
}

mysqli_stmt_bind_param($stmt, 'ssss', $nombre, $email, $servicio, $fecha);

if (mysqli_stmt_execute($stmt)) {
    http_response_code(200);
    echo 'Cita programada con exito.';
} else {
    http_response_code(500);
    echo 'No se pudo guardar la cita.';
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>