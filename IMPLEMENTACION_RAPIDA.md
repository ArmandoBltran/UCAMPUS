# 🚀 Guía Rápida de Implementación - Sistema de Seguridad de Citas

## 5 Pasos Críticos

### 1️⃣ Configurar reCAPTCHA v3 (5 min)
```
1. https://www.google.com/recaptcha/admin
2. Crear nuevo sitio
3. Tipo: reCAPTCHA v3
4. Dominios: tu-dominio.com
5. Copiar claves en:
   - config-seguridad.php (RECAPTCHA_SECRET, RECAPTCHA_PUBLIC)
   - citas-seguro.html (línea ~462: CitasSeguraManager)
```

### 2️⃣ Ejecutar Script SQL (2 min)
```bash
mysql -u ucamzqgl_ArmandoBltran -p ucamzqgl_Citas < seguridad_db.sql
```

Verifica tablas creadas:
```sql
SHOW TABLES LIKE '%verificacion%';
SHOW TABLES LIKE 'rate_limit';
SHOW TABLES LIKE 'captcha_log';
```

### 3️⃣ Configurar Email SMTP (5 min)

En `config-seguridad.php`:
```php
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'tu@gmail.com');
define('SMTP_PASSWORD', 'consena_app_gmail'); // NO usar contraseña normal
define('EMAIL_FROM', 'noreply@ucarolina.edu.mx');
```

**Para Gmail**: Generar contraseña de app en Seguridad → Contraseñas de aplicación

### 4️⃣ Reemplazar URLs de API (2 min)

En `citas-seguro.html`:
```javascript
// Línea ~462 - Cambiar rutas según tu estructura
const manager = new CitasSeguraManager({
    recaptchaKey: 'TU_CLAVE_PUBLICA',
    apiUrlVerificacion: 'ruta/a/api_verificacion.php',
    apiUrlCitas: 'ruta/a/citas.php',
    formSelector: '#formulario-citas'
});
```

### 5️⃣ Probar (5 min)
```
1. Abrir citas-seguro.html
2. Ingresa email
3. Clic "Enviar Código"
4. Revisa bandeja entrada
5. Copia código 6-dígitos
6. Completa formulario
7. Envía cita
```

---

## ✅ Checklist de Implementación

- [ ] reCAPTCHA v3 configurado
- [ ] Tablas SQL creadas
- [ ] SMTP configurado
- [ ] URLs de API actualizadas
- [ ] `config-seguridad.php` editado
- [ ] Prueba de flujo completo exitosa
- [ ] Emails llegando correctamente
- [ ] Rate limiting probado
- [ ] HTTPS habilitado en producción
- [ ] Backups configurados

---

## 🧪 Pruebas Rápidas

### Test 1: ¿Llevan emails?
```bash
# Enviar código
curl -X POST http://localhost/api_verificacion.php?action=enviar_codigo \
  -d "email=tutest@gmail.com"

# Revisar Gmail en segundos
```

### Test 2: ¿Valida código?
```bash
curl -X POST http://localhost/api_verificacion.php?action=validar_codigo \
  -d "email=tutest@gmail.com&codigo=123456"

# Debe retornar error si código es incorrecto
```

### Test 3: ¿Rate limiting funciona?
```bash
# Enviar 4 solicitudes seguidas
for i in {1..4}; do
  curl -X POST http://localhost/api_verificacion.php?action=enviar_codigo \
    -d "email=tutest@gmail.com"
done

# La 4ta debe fallar con 429 Too Many Requests
```

---

## 🔧 Personalización Rápida

### Cambiar límites de intentos:

`config-seguridad.php`:
```php
define('RATE_LIMIT_EMAIL_ENVIOS_24H', 3);      // Cambiar a 5, 10, etc
define('RATE_LIMIT_EMAIL_VALIDACIONES_15M', 10); // Cambiar a 20, 30, etc
define('OTP_EXPIRATION_MINUTES', 15);           // Cambiar a 10, 20, etc
```

### Cambiar mensajes de error:

`config-seguridad.php`:
```php
define('MSG_RATE_LIMIT_EMAIL', 'Demasiados intentos. Intenta más tarde.');
// Editar al mensaje personalizado
```

### Cambiar score mínimo CAPTCHA:

`citas.php` (línea ~90):
```php
if (($captcha_data['score'] ?? 0) < 0.5) { // Cambiar 0.5 a 0.3, 0.7, etc
```

---

## 🚨 Errores Comunes

### ❌ "No se recibe código"
**Solución**: Revisar:
1. Credenciales SMTP en `config-seguridad.php`
2. SMTP_USER y SMTP_PASSWORD
3. Si es Gmail, usar contraseña de app (no contraseña normal)
4. Ver error_log del servidor

### ❌ "CAPTCHA no funciona"
**Solución**: 
1. Verificar clave pública en reCAPTCHA console
2. Revisar dominio registrado en Google
3. Abrir consola (F12) y revisar errores JavaScript

### ❌ "429 Too Many Requests"
**Solución**: Es normal. Rate limiting funcionando.
- Esperar 1 hora para IP
- Esperar 24 horas para email
- Usar otro email/dispositivo para pruebas

### ❌ "500 Error Base de Datos"
**Solución**:
1. Confirmar tablas existen: `SHOW TABLES;`
2. Confirmar credenciales BD correctas
3. Revisar error_log del servidor

---

## 📊 Monitoreo Post-Implementación

### Dashboard SQL (Ejecutar regularmente)

**Intentos fallidos de CAPTCHA:**
```sql
SELECT ip_address, COUNT(*) as intentos
FROM captcha_log
WHERE resultado = FALSE AND fecha_intento > DATE_SUB(NOW(), INTERVAL 24 HOUR)
GROUP BY ip_address
ORDER BY intentos DESC
LIMIT 10;
```

**IPs bloqueadas:**
```sql
SELECT ip_address, COUNT(*) as intentos, MIN(fecha_intento) as primer_intento
FROM rate_limit
WHERE tipo_intento = 'cita' AND fecha_intento > DATE_SUB(NOW(), INTERVAL 24 HOUR)
GROUP BY ip_address
HAVING intentos >= 10
ORDER BY intentos DESC;
```

**Usuarios spam:**
```sql
SELECT email, COUNT(*) as intentos, MIN(fecha_intento) as primer_intento
FROM rate_limit
WHERE tipo_intento = 'verificacion' AND fecha_intento > DATE_SUB(NOW(), INTERVAL 24 HOUR)
GROUP BY email
HAVING intentos >= 3
ORDER BY intentos DESC;
```

**Citas por usuario (últimos 7 días):**
```sql
SELECT email, COUNT(*) as citas_totales, MAX(fecha_creacion) as ultima_cita
FROM citas
WHERE fecha_creacion > DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY email
ORDER BY citas_totales DESC;
```

---

## 📞 Support Rápido

| Problema | Causa | Solución |
|----------|-------|----------|
| Código no llega | SMTP mal | Revisar config-seguridad.php |
| Bloqueado 429 | Rate limit | Esperar o cambiar IP/email |
| CAPTCHA falla | Clave mala | Recrear en Google console |
| BD error 500 | Tabla no existe | Correr seguridad_db.sql |
| Sesión expira | Token vencido | 1 hora de inactividad |

---

## 🎯 Próximos Pasos Opcionales

1. **Implementar CSRF tokens** (seguridad extra)
2. **Añadir 2FA con SMS** (si tienes presupuesto)
3. **Dashboard admin** para ver intentos de spam
4. **Integración Slack/Discord** para alertas
5. **IP whitelist** para empleados administrativos

---

## 📝 Versión: 1.0 Quick Setup
Creado: 26/03/2026
Tiempo total: ~20 minutos
