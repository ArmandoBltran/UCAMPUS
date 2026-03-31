<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/config-seguridad.php';

// Datos centralizados
$host = DB_HOST;
$user = DB_USER;
$password = DB_PASSWORD;
$db = DB_NAME;

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
    $date = trim($_GET['date'] ?? '');
    $action = trim($_GET['action'] ?? '');

    if ($action === 'completar') {
        $id = (int)($_GET['id'] ?? 0);

        if ($id <= 0) {
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

    if ($action === 'eliminar_completadas') {
        $stmt = mysqli_prepare($conn, "DELETE FROM citas WHERE estatus = 'Completada'");
        if (!$stmt) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al preparar eliminacion.']);
            mysqli_close($conn);
            exit;
        }

        if (mysqli_stmt_execute($stmt)) {
            $eliminadas = mysqli_stmt_affected_rows($stmt);
            http_response_code(200);
            echo json_encode([
                'mensaje' => 'Citas completadas eliminadas.',
                'deleted_count' => $eliminadas
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'No se pudieron eliminar las citas completadas.']);
        }

        mysqli_stmt_close($stmt);
        mysqli_close($conn);
        exit;
    }

    if ($date !== '') {
        $dateObj = DateTime::createFromFormat('Y-m-d', $date);
        $dateValida = $dateObj && $dateObj->format('Y-m-d') === $date;

        if (!$dateValida) {
            http_response_code(400);
            echo json_encode(['error' => 'Formato de fecha invalido.']);
            mysqli_close($conn);
            exit;
        }

        $stmt = mysqli_prepare($conn, 'SELECT DATE_FORMAT(fecha_hora, "%H:%i") AS hora FROM citas WHERE DATE(fecha_hora) = ? ORDER BY fecha_hora ASC');
        if (!$stmt) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al preparar consulta de horarios.']);
            mysqli_close($conn);
            exit;
        }

        mysqli_stmt_bind_param($stmt, 's', $date);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        $ocupados = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $ocupados[] = $row['hora'];
        }

        mysqli_stmt_close($stmt);
        http_response_code(200);
        echo json_encode(['date' => $date, 'occupied_times' => $ocupados]);
        mysqli_close($conn);
        exit;
    }

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

// POST /api_citas.php
// action=completar&id=X            → marca una cita como Completada
// action=eliminar_completadas      → elimina citas con estatus Completada
if ($method === 'POST') {
    $action = trim($_POST['action'] ?? '');

    if ($action === 'completar') {
        $id = (int)($_POST['id'] ?? 0);

        if ($id <= 0) {
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

    if ($action === 'eliminar_completadas') {
        $stmt = mysqli_prepare($conn, "DELETE FROM citas WHERE estatus = 'Completada'");
        if (!$stmt) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al preparar eliminacion.']);
            mysqli_close($conn);
            exit;
        }

        if (mysqli_stmt_execute($stmt)) {
            $eliminadas = mysqli_stmt_affected_rows($stmt);
            http_response_code(200);
            echo json_encode([
                'mensaje' => 'Citas completadas eliminadas.',
                'deleted_count' => $eliminadas
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'No se pudieron eliminar las citas completadas.']);
        }

        mysqli_stmt_close($stmt);
        mysqli_close($conn);
        exit;
    }

    http_response_code(400);
    echo json_encode(['error' => 'Accion no valida.']);
    mysqli_close($conn);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Metodo no permitido.']);
?>
