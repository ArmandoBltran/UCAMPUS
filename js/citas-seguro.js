/**
 * Sistema seguro de citas con CAPTCHA y verificación por email
 * Uso: citas-seguro.js
 */

class CitasSeguraManager {
    constructor(config = {}) {
        this.recaptchaKey = config.recaptchaKey || 'TU_CLAVE_PUBLICA_RECAPTCHA';
        this.apiUrlVerificacion = config.apiUrlVerificacion || 'api_verificacion.php';
        this.apiUrlCitas = config.apiUrlCitas || 'citas.php';
        this.formSelector = config.formSelector || '#formulario-citas';
        this.paso = 'email'; // email, codigo, completar
        this.emailVerificado = null;
        this.verificationToken = null;
        
        this.init();
    }

    init() {
        this.cargarRecaptcha();
        this.setupEventListeners();
    }

    cargarRecaptcha() {
        // Cargar script de reCAPTCHA v3
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=' + this.recaptchaKey;
        document.head.appendChild(script);
    }

    setupEventListeners() {
        const formulario = document.querySelector(this.formSelector);
        if (!formulario) return;

        // Botón para enviar código de verificación
        const btnEnviarCodigo = document.getElementById('btn-enviar-codigo-citas');
        if (btnEnviarCodigo) {
            btnEnviarCodigo.addEventListener('click', (e) => this.enviarCodigoVerificacion(e));
        }

        // Botón para validar código
        const btnValidarCodigo = document.getElementById('btn-validar-codigo-citas');
        if (btnValidarCodigo) {
            btnValidarCodigo.addEventListener('click', (e) => this.validarCodigoVerificacion(e));
        }

        // Formulario general
        formulario.addEventListener('submit', (e) => this.handleSubmitCita(e));
    }

    mostrarPaso(paso) {
        this.paso = paso;

        // Ocultar todos los pasos
        const pasos = document.querySelectorAll('[data-paso-citas]');
        pasos.forEach(p => p.style.display = 'none');

        // Mostrar paso actual
        const pasoActual = document.querySelector(`[data-paso-citas="${paso}"]`);
        if (pasoActual) {
            pasoActual.style.display = 'block';
        }
    }

    async enviarCodigoVerificacion(e) {
        e.preventDefault();

        const emailInput = document.getElementById('email-citas');
        if (!emailInput) {
            this.mostrarError('No se encontró campo de email');
            return;
        }

        const email = emailInput.value.trim();

        if (!this.validarEmail(email)) {
            this.mostrarError('Por favor ingresa un email válido');
            return;
        }

        const btnEnviar = document.getElementById('btn-enviar-codigo-citas');
        this.setLoadingState(btnEnviar, true);
        this.mostrarMensaje('Enviando código...', 'info');

        try {
            const formData = new FormData();
            formData.append('email', email);

            const response = await fetch(this.apiUrlVerificacion + '?action=enviar_codigo', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al enviar código');
            }

            this.emailVerificado = email;
            this.mostrarExito('Código enviado a ' + data.email_enmascarado);
            this.mostrarPaso('codigo');

        } catch (error) {
            console.error('Error:', error);
            this.mostrarError(error.message || 'Error al enviar código');
        } finally {
            this.setLoadingState(btnEnviar, false);
        }
    }

    async validarCodigoVerificacion(e) {
        e.preventDefault();

        const codigoInput = document.getElementById('codigo-citas');
        if (!codigoInput) {
            this.mostrarError('No se encontró campo de código');
            return;
        }

        const codigo = codigoInput.value.trim();

        if (!/^\d{6}$/.test(codigo)) {
            this.mostrarError('Código debe ser 6 dígitos');
            return;
        }

        const btnValidar = document.getElementById('btn-validar-codigo-citas');
        this.setLoadingState(btnValidar, true);
        this.mostrarMensaje('Validando código...', 'info');

        try {
            const formData = new FormData();
            formData.append('email', this.emailVerificado);
            formData.append('codigo', codigo);

            const response = await fetch(this.apiUrlVerificacion + '?action=validar_codigo', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Código inválido');
            }

            this.verificationToken = data.token;
            this.mostrarExito('Email verificado correctamente');
            this.mostrarPaso('completar');

            // Auto-llenar email en formulario
            const emailFormInput = document.getElementById('email-citas-form');
            if (emailFormInput) {
                emailFormInput.value = this.emailVerificado;
            }

        } catch (error) {
            console.error('Error:', error);
            this.mostrarError(error.message || 'Error validando código');
        } finally {
            this.setLoadingState(btnValidar, false);
        }
    }

    async handleSubmitCita(e) {
        e.preventDefault();

        if (!this.verificationToken) {
            this.mostrarError('Debes verificar tu email primero');
            this.mostrarPaso('email');
            return;
        }

        // Obtener datos del formulario
        const nombre = document.getElementById('nombre-citas')?.value.trim();
        const email = document.getElementById('email-citas-form')?.value.trim();
        const servicio = document.getElementById('servicio-citas')?.value;
        const fecha = document.getElementById('fecha-citas')?.value;

        if (!nombre || !email || !servicio || !fecha) {
            this.mostrarError('Por favor completa todos los campos');
            return;
        }

        // Convertir fecha a formato Y-m-d H:m:s
        const fechaFormato = this.convertirFechaAlFormato(fecha);
        if (!fechaFormato) {
            this.mostrarError('Formato de fecha inválido');
            return;
        }

        const btnSubmit = document.querySelector(this.formSelector + ' button[type="submit"]');
        this.setLoadingState(btnSubmit, true);
        this.mostrarMensaje('Programando cita...', 'info');

        try {
            // Obtener token de reCAPTCHA
            const recaptchaToken = await grecaptcha.execute(this.recaptchaKey, {
                action: 'submit'
            });

            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('email', email);
            formData.append('servicio', servicio);
            formData.append('fecha', fechaFormato);
            formData.append('recaptcha_token', recaptchaToken);
            formData.append('verification_token', this.verificationToken);

            const response = await fetch(this.apiUrlCitas, {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al programar cita');
            }

            this.mostrarExito('¡Cita programada con éxito! Recibirás confirmación por email');
            this.resetearFormulario();

        } catch (error) {
            console.error('Error:', error);
            this.mostrarError(error.message || 'Error al programar cita');
        } finally {
            this.setLoadingState(btnSubmit, false);
        }
    }

    convertirFechaAlFormato(fechaInput) {
        // Espera formato: YYYY-MM-DDTHH:mm (de input type="datetime-local")
        // Convierte a: YYYY-MM-DD HH:mm:ss
        if (!fechaInput) return null;
        
        const fecha = new Date(fechaInput);
        if (isNaN(fecha)) return null;

        const año = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const dia = String(fecha.getDate()).padStart(2, '0');
        const horas = String(fecha.getHours()).padStart(2, '0');
        const minutos = String(fecha.getMinutes()).padStart(2, '0');
        const segundos = '00';

        return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    }

    validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    mostrarMensaje(mensaje, tipo = 'info') {
        const alertBox = document.getElementById('alerta-citas');
        if (!alertBox) return;

        alertBox.className = `alerta alerta-${tipo}`;
        alertBox.textContent = mensaje;
        alertBox.style.display = 'block';
    }

    mostrarError(mensaje) {
        this.mostrarMensaje(mensaje, 'error');
    }

    mostrarExito(mensaje) {
        this.mostrarMensaje(mensaje, 'success');
    }

    setLoadingState(button, isLoading) {
        if (!button) return;
        button.disabled = isLoading;
        button.textContent = isLoading 
            ? '⏳ Cargando...' 
            : button.textContent.replace('⏳ Cargando...', '');
    }

    resetearFormulario() {
        const form = document.querySelector(this.formSelector);
        if (form) form.reset();
        this.paso = 'email';
        this.emailVerificado = null;
        this.verificationToken = null;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const manager = new CitasSeguraManager({
        recaptchaKey: '6LeSKpksAAAAAHlRRFVkeSL9bTQwo-0NvAY0urtt', // Reemplazar con clave real
        apiUrlVerificacion: 'api_verificacion.php',
        apiUrlCitas: 'citas.php',
        formSelector: '#formulario-citas'
    });

    // Exponer globalmente si es necesario
    window.citasManager = manager;
});
