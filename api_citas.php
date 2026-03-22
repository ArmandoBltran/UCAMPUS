<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

// Datos de la base de datos
$host = 'localhost';
$user = 'ucamzqgl_ArmandoBltran';
$password = 'SABJ081125HCLNLNA1';
$db = 'ucamzqgl_Citas';

$conn = mysqli_connect($host, $user, $password, $db);
if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo conectar a la base de datos.']);
    exit;
}

mysqli_set_charset($conn, 'utf8mb4');

$method = $_SERVER['REQUEST_METHOD'];

// GET /api_citas.php  → devuelve todas las citas
if ($method === 'GET') {
    $result = mysqli_query($conn, 'SELECT id, `name`, email, servicio, fecha_hora, estatus FROM citas ORDER BY fecha_hora ASC');
    if (!$result) {
        http_response_code(500);
        echo json_encode(['error' => 'Error al obtener citas.']);
        mysqli_close($conn);
        exit;
    }

    $citas = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $citas[] = $row;
    }

    http_response_code(200);
    echo json_encode($citas);
    mysqli_close($conn);
    exit;
}

// POST /api_citas.php  con action=completar&id=X → marca cita como Completada
if ($method === 'POST') {
    $action = trim($_POST['action'] ?? '');
    $id = (int)($_POST['id'] ?? 0);

    if ($action !== 'completar' || $id <= 0) {
        http_response_code(400);
        echo json_encode(['error' => 'Parametros invalidos.']);
        mysqli_close($conn);
        exit;
    }

    $stmt = mysqli_prepare($conn, "UPDATE citas SET estatus = 'Completada' WHERE id = ?");
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['error' => 'Error al preparar consulta.']);
        mysqli_close($conn);
        exit;
    }

    mysqli_stmt_bind_param($stmt, 'i', $id);

    if (mysqli_stmt_execute($stmt) && mysqli_stmt_affected_rows($stmt) > 0) {
        http_response_code(200);
        echo json_encode(['mensaje' => 'Cita marcada como Completada.']);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Cita no encontrada o ya estaba completada.']);
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Metodo no permitido.']);
?>
