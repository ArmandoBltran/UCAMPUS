-- Tabla para almacenar códigos de verificación por email
CREATE TABLE IF NOT EXISTS email_verificaciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    codigo VARCHAR(6) NOT NULL,
    fecha_expiracion DATETIME NOT NULL,
    intentos INT DEFAULT 0,
    verificado BOOLEAN DEFAULT FALSE,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_fecha_expiracion (fecha_expiracion)
);

-- Tabla para rate limiting por IP y email
CREATE TABLE IF NOT EXISTS rate_limit (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ip_address VARCHAR(45) NOT NULL,
    email VARCHAR(255),
    tipo_intento ENUM('formulario', 'verificacion', 'cita') NOT NULL,
    fecha_intento DATETIME DEFAULT CURRENT_TIMESTAMP,
    exitoso BOOLEAN DEFAULT FALSE,
    INDEX idx_ip_fecha (ip_address, fecha_intento),
    INDEX idx_email_fecha (email, fecha_intento),
    INDEX idx_tipo_fecha (tipo_intento, fecha_intento)
);

-- Tabla para almacenar intentos de CAPTCHA fallidos (opcional)
CREATE TABLE IF NOT EXISTS captcha_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ip_address VARCHAR(45) NOT NULL,
    token_score FLOAT,
    resultado BOOLEAN DEFAULT FALSE,
    fecha_intento DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_ip_fecha (ip_address, fecha_intento)
);

-- Tabla para desbloqueos de segunda oportunidad por IP
CREATE TABLE IF NOT EXISTS segunda_oportunidad (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ip_address VARCHAR(45) NOT NULL UNIQUE,
    score INT NOT NULL,
    hard_mode BOOLEAN DEFAULT FALSE,
    desbloqueado_hasta DATETIME NOT NULL,
    usado BOOLEAN DEFAULT FALSE,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_ip (ip_address),
    INDEX idx_desbloqueado_hasta (desbloqueado_hasta)
);

-- Alter table citas para adicionar campos de seguimiento
ALTER TABLE citas ADD COLUMN IF NOT EXISTS verificado BOOLEAN DEFAULT FALSE;
ALTER TABLE citas ADD COLUMN IF NOT EXISTS ip_creacion VARCHAR(45);
ALTER TABLE citas ADD COLUMN IF NOT EXISTS fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP;
