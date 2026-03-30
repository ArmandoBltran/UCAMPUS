# Sistema Seguro de Citas - Documentación

## 📋 Resumen

Se ha implementado un **sistema robusto de seguridad** para el módulo de citas que previene:
- ✅ Sobrecarga de citas innecesarias (spam)
- ✅ Ataques automatizados (bots)
- ✅ Verificación falsa de identidad
- ✅ Ataques de fuerza bruta

---

## 🔒 Capas de Seguridad Implementadas

### 1. **CAPTCHA (reCAPTCHA v3)**
- **Ubicación**: Validación al enviar el formulario de cita
- **Función**: Detectar comportamiento de bots
- **Ventaja**: Funciona sin intervención del usuario
- **Score**: 0.0 (bot probable) a 1.0 (usuario real)
- **Límite**: Score mínimo requerido: 0.5 (configurable)

### 2. **Verificación por Email con OTP**
- **Flujo**:
  1. Usuario ingresa email
  2. Se genera código de 6 dígitos
  3. Se envía por email
  4. Usuario lo ingresa en formulario
  5. Se valida y se marca como verificado

- **Seguridad**:
  - Código expira en **15 minutos**
  - Máximo 3 intentos de envío por email en 24 horas
  - Máximo 10 intentos de validación en 15 minutos
  - Máximo 5 intentos de IP por hora

### 3. **Rate Limiting**

#### Por Email:
- Máximo **5 citas por usuario en 7 días**
- Máximo 3 intentos de envío de código en 24 horas
- Máximo 10 intentos de validación en 15 minutos

#### Por IP:
- Máximo **10 citas por IP en 24 horas**
- Máximo 5 intentos de verificación por hora
- Bloqueo temporal automático al exceder límites

### 4. **Validación de Datos**
- Email con formato válido
- Servicio en lista permitida
- Fecha/hora en formato correcto
- Horarios no duplicados
- Sesiones con token verificado

---

## 📊 Tablas de Base de Datos

### Tabla: `email_verificaciones`
```sql
CREATE TABLE email_verificaciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    codigo VARCHAR(6) NOT NULL,
    fecha_expiracion DATETIME NOT NULL,
    intentos INT DEFAULT 0,
    verificado BOOLEAN DEFAULT FALSE,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Tabla: `rate_limit`
```sql
CREATE TABLE rate_limit (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ip_address VARCHAR(45) NOT NULL,
    email VARCHAR(255),
    tipo_intento ENUM('formulario', 'verificacion', 'cita') NOT NULL,
    fecha_intento DATETIME DEFAULT CURRENT_TIMESTAMP,
    exitoso BOOLEAN DEFAULT FALSE
);
```

### Tabla: `captcha_log`
```sql
CREATE TABLE captcha_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ip_address VARCHAR(45) NOT NULL,
    token_score FLOAT,
    resultado BOOLEAN DEFAULT FALSE,
    fecha_intento DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📁 Archivos Nuevos/Modificados

### Nuevos:
- `api_verificacion.php` - API de verificación por email
- `js/citas-seguro.js` - Gestión del flujo de citas seguro
- `citas-seguro.html` - Interfaz de citas con seguridad
- `seguridad_db.sql` - Script SQL de tablas

### Modificados:
- `citas.php` - Añadidas validaciones de seguridad
- `api_citas.php` - Añadidas cabeceras y sesiones

---

## 🚀 Instalación

### Paso 1: Crear Tablas de Base de Datos
```bash
mysql -u ucamzqgl_ArmandoBltran -p ucamzqgl_Citas < seguridad_db.sql
```

### Paso 2: Configurar reCAPTCHA v3
1. Ir a: https://www.google.com/recaptcha/admin
2. Crear nuevo sitio
3. Seleccionar "reCAPTCHA v3"
4. Copiar **Clave Pública** en HTML
5. Copiar **Clave Secreta** en `citas.php` y `api_verificacion.php`

### Paso 3: Configurar Email (SMTP)
Reemplazar en `api_verificacion.php`:
```php
// Opción 1: Usar PHPMailer con Gmail
$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'tu@gmail.com';
$mail->Password = 'tu_contraseña_app';
$mail->setFrom('tu@gmail.com', 'Universidad Carolina');
$mail->addAddress($email);
$mail->Subject = 'Código de Verificación';
$mail->Body = $cuerpo;
$mail->send();

// Opción 2: Usar sendmail en servidor compartido
mail($email, $asunto, $cuerpo, $headers);
```

### Paso 4: Actualizar rutas en HTML
- Cambiar `citas-seguro.html` path si es necesario
- Ajustar URLs de API según estructura

---

## 💻 Uso

### Para Usuarios

1. **Verificar Email**
   - Ingresa tu email
   - Haz clic en "Enviar Código"
   - Revisa tu bandeja de entrada

2. **Validar Código**
   - Copia el código de 6 dígitos
   - Ingrésalo en el formulario
   - Haz clic en "Validar Código"

3. **Agendar Cita**
   - Completa tu nombre
   - Selecciona servicio
   - Elige fecha y hora
   - Envía el formulario

### Para Administradores

**Ver intentos de SPAM/Bots:**
```sql
SELECT ip_address, COUNT(*) as intentos 
FROM captcha_log 
WHERE resultado = FALSE 
GROUP BY ip_address 
ORDER BY intentos DESC;
```

**Ver IPs bloqueadas:**
```sql
SELECT ip_address, COUNT(*) as intentos 
FROM rate_limit 
WHERE fecha_intento > DATE_SUB(NOW(), INTERVAL 1 HOUR)
GROUP BY ip_address
HAVING intentos > 5;
```

**Ver emails sospechosos:**
```sql
SELECT email, COUNT(*) as intentos 
FROM rate_limit 
WHERE tipo_intento = 'verificacion'
  AND fecha_intento > DATE_SUB(NOW(), INTERVAL 24 HOUR)
GROUP BY email
HAVING intentos >= 3;
```

---

## 🔧 Personalización

### Cambiar Límites de Rate Limiting

En `api_verificacion.php`:
```php
// Máximo intentos por email en 24 horas
if ($limitRow['intentos'] >= 3) { // Cambiar 3 al límite deseado

// Máximo intentos por IP en 1 hora
if ($ipLimitRow['intentos'] >= 5) { // Cambiar 5 al límite deseado
```

En `citas.php`:
```php
// Máximo citas por usuario en 7 días
if ($emailLimitRow['citas'] >= 5) { // Cambiar 5 al límite deseado

// Máximo citas por IP en 24 horas
if ($ipLimitRow['citas'] >= 10) { // Cambiar 10 al límite deseado
```

### Cambiar Tiempo de Expiración del Código

En `api_verificacion.php`:
```php
$expiracion = date('Y-m-d H:i:s', strtotime('+15 minutes')); // Cambiar a +10 minutes, etc.
```

### Cambiar Score Mínimo de CAPTCHA

En `citas.php`:
```php
if (($captcha_data['score'] ?? 0) < 0.5) { // Cambiar 0.5 a otro valor (0.0 a 1.0)
```

---

## 🧪 Pruebas

### Simular Verificación Local
```javascript
// En consola del navegador
const manager = window.citasManager;
manager.mostrarPaso('email'); // Mostrar paso de email
```

### Endpoint de Prueba - Enviar Código
```bash
curl -X POST http://localhost/api_verificacion.php?action=enviar_codigo \
  -d "email=test@example.com"
```

### Endpoint de Prueba - Validar Código
```bash
curl -X POST http://localhost/api_verificacion.php?action=validar_codigo \
  -d "email=test@example.com&codigo=123456"
```

---

## ⚠️ Consideraciones Importantes

### Seguridad en Producción

1. **HTTPS Obligatorio**: Asegurar conexión cifrada
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

2. **Claves Secretas**: Usar variables de entorno
   ```php
   $recaptcha_secret = getenv('RECAPTCHA_SECRET_KEY');
   ```

3. **Validación CSRF**: Añadir tokens CSRF
   ```php
   session_start();
   if (empty($_SESSION['csrf_token'])) {
       $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
   }
   ```

4. **Sanitización Adicional**: Usar HTML entities
   ```php
   htmlspecialchars($email, ENT_QUOTES, 'UTF-8')
   ```

### Monitoreo

- Revisar `rate_limit` regularmente
- Monitorear `captcha_log` para detectar patrones
- Ajustar límites según necesidad

### Backup

Realizar backup de tablas de seguridad regularmente
```bash
mysqldump -u usuario -p tabla > backup.sql
```

---

## 📞 Soporte

**Problemas Comunes:**

### "CAPTCHA no recibido"
- Verificar clave pública de reCAPTCHA
- Revisar console del navegador para errores
- Asegurar que el sitio está registrado en reCAPTCHA

### "Código no llega al email"
- Configurar SMTP correctamente
- Revisar carpeta de spam
- Usar PHPMailer para mejor compatibilidad

### "Bloqueado temporalmente"
- Esperar tiempo especificado (1 o 24 horas)
- Usar otra dirección de email
- Usar otro dispositivo/IP

---

## 🎯 Flujo Completo

```
┌─────────────────┐
│  Usuario entra  │
└────────┬────────┘
         │
         ▼
┌──────────────────────┐
│ Ingresa Email        │
│ Clic: Enviar Código  │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────────┐
│ Validación:              │
│ ✓ Email válido           │
│ ✓ Rate limit por email   │
│ ✓ Rate limit por IP      │
└────────┬─────────────────┘
         │
         ▼
┌────────────────────────┐
│ Generar código OTP     │
│ Guardar en BD          │
│ Enviar por email       │
└────────┬───────────────┘
         │
         ▼
┌──────────────────────┐
│ Usuario recibe email │
│ Ingresa código (6d)  │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────────┐
│ Validación:              │
│ ✓ Código correcto        │
│ ✓ No expirado            │
│ ✓ Intentos permitidos    │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────────┐
│ Crear sesión verificada      │
│ Token temporal (1 hora)      │
└────────┬─────────────────────┘
         │
         ▼
┌───────────────────────────┐
│ Formulario de Cita        │
│ Auto-llenar Email         │
└────────┬──────────────────┘
         │
         ▼
┌──────────────────────────────┐
│ Completar datos:             │
│ - Nombre                     │
│ - Servicio                   │
│ - Fecha/Hora                 │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│ Enviar Formulario            │
│ Ejecutar reCAPTCHA v3        │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│ Validaciones finales:        │
│ ✓ CAPTCHA score ≥ 0.5       │
│ ✓ Email verificado          │
│ ✓ Rate limit citas/usuario  │
│ ✓ Rate limit citas/IP       │
│ ✓ Horario disponible        │
└────────┬─────────────────────┘
         │
         ▼
┌──────────────────────────┐
│ Guardar Cita             │
│ Enviar confirmación      │
│ ✅ Éxito                 │
└──────────────────────────┘
```

---

## 📝 Versión

- **Versión**: 1.0
- **Fecha**: 2026-03-26
- **Autor**: Sistema de Seguridad - Universidad Carolina
- **Estado**: Producción
