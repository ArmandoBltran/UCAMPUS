(function () {
    const flowToggleButtons = Array.from(document.querySelectorAll('.flow-step-toggle'));

    function setFlowPanelState(targetId, shouldExpand) {
        const panel = document.getElementById(targetId);
        if (!panel) {
            return;
        }

        const button = flowToggleButtons.find((item) => item.dataset.flowTarget === targetId);
        const parentCard = panel.closest('.flow-card');

        panel.hidden = !shouldExpand;

        if (button) {
            button.setAttribute('aria-expanded', shouldExpand ? 'true' : 'false');
            button.classList.toggle('is-open', shouldExpand);
            button.textContent = shouldExpand ? 'Ocultar detalles' : 'Ver detalles';
        }

        if (parentCard) {
            parentCard.classList.toggle('is-expanded', shouldExpand);
        }
    }

    if (flowToggleButtons.length) {
        flowToggleButtons.forEach((button) => {
            const panelId = button.dataset.flowTarget;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            setFlowPanelState(panelId, isExpanded);
        });

        flowToggleButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const panelId = button.dataset.flowTarget;
                const isExpanded = button.getAttribute('aria-expanded') === 'true';

                // Mantiene solo un paso abierto a la vez para reducir texto visible.
                flowToggleButtons.forEach((item) => {
                    const currentId = item.dataset.flowTarget;
                    if (currentId !== panelId) {
                        setFlowPanelState(currentId, false);
                    }
                });

                setFlowPanelState(panelId, !isExpanded);
            });
        });
    }

    const flowTabs = Array.from(document.querySelectorAll('.flow-level-tab'));
    const flowStep1List = document.getElementById('flow-step1-list');
    const flowStep1Note = document.getElementById('flow-step1-note');

    if (flowTabs.length && flowStep1List) {
        const requirementsByLevel = {
            preparatoria: {
                label: 'Preparatoria',
                items: [
                    'Certificado de secundaria o constancia de terminación.',
                    'Acta de nacimiento vigente.',
                    'CURP y copia de identificación del tutor.',
                    'Comprobante de domicilio reciente y 4 fotografías tamaño infantil.'
                ]
            },
            profesional: {
                label: 'Profesional',
                items: [
                    'Acta de nacimiento.',
                    'Comprobante de domicilio.',
                    'CURP.',
                    'Certificado de bachillerato.',
                    'Carta de autenticidad del certificado.'
                ]
            },
            maestria: {
                label: 'Maestría',
                items: [
                    'Acta de nacimiento.',
                    'Comprobante de domicilio.',
                    'CURP.',
                    'Copia de título profesional.',
                    'Entrevista de admisión.',
                    'Correo de contacto: admisiones@ucarolina.mx'
                ]
            }
        };

        function renderRequirements(level) {
            const current = requirementsByLevel[level] || requirementsByLevel.preparatoria;
            flowStep1List.innerHTML = current.items.map((item) => `<li>${item}</li>`).join('');
            if (flowStep1Note) {
                flowStep1Note.innerHTML = `<strong>Nivel seleccionado:</strong> ${current.label}`;
            }
        }

        flowTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                flowTabs.forEach((item) => {
                    item.classList.remove('is-active');
                    item.setAttribute('aria-selected', 'false');
                });

                tab.classList.add('is-active');
                tab.setAttribute('aria-selected', 'true');
                renderRequirements(tab.dataset.flowLevel || 'preparatoria');
            });
        });
    }

    const form = document.getElementById('appointment-form');
    if (!form) {
        return;
    }

    const timeInput = document.getElementById('appointment-time');
    const dateInput = document.getElementById('appointment-date');
    const selectedTimeText = document.getElementById('selected-time-text');
    const message = document.getElementById('appointment-message');
    const receipt = document.getElementById('appointment-receipt');
    const receiptName = document.getElementById('receipt-name');
    const receiptEmail = document.getElementById('receipt-email');
    const receiptService = document.getElementById('receipt-service');
    const receiptDate = document.getElementById('receipt-date');
    const receiptTime = document.getElementById('receipt-time');
    const clearReceiptButton = document.getElementById('clear-receipt-btn');
    const slotButtons = Array.from(document.querySelectorAll('.slot-btn'));
    let selectedSlotTime = '';

    // Evita seleccionar fechas pasadas en el campo date.
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    dateInput.min = minDate;

    function resetSlotSelection() {
        slotButtons.forEach((item) => item.classList.remove('active'));
        selectedSlotTime = '';
        timeInput.value = '';
        selectedTimeText.textContent = 'Horario seleccionado: ninguno';
    }

    function setUnavailableSlots(occupiedTimes) {
        const occupiedSet = new Set(occupiedTimes);

        slotButtons.forEach((button) => {
            const slotTime = button.dataset.time || '';
            const isUnavailable = occupiedSet.has(slotTime);

            button.disabled = isUnavailable;
            button.classList.toggle('is-unavailable', isUnavailable);
            button.setAttribute('aria-disabled', isUnavailable ? 'true' : 'false');

            if (isUnavailable && selectedSlotTime === slotTime) {
                resetSlotSelection();
            }
        });
    }

    function formatDateForReceipt(dateValue) {
        if (!dateValue) {
            return '-';
        }

        const [year, month, day] = dateValue.split('-').map(Number);
        const parsedDate = new Date(year, month - 1, day);

        if (Number.isNaN(parsedDate.getTime())) {
            return dateValue;
        }

        return new Intl.DateTimeFormat('es-MX', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(parsedDate);
    }

    function renderAppointmentReceipt(details) {
        if (!receipt || !receiptName || !receiptEmail || !receiptService || !receiptDate || !receiptTime) {
            return;
        }

        receiptName.textContent = details.name || '-';
        receiptEmail.textContent = details.email || '-';
        receiptService.textContent = details.service || '-';
        receiptDate.textContent = formatDateForReceipt(details.date || '');
        receiptTime.textContent = details.time || '-';
        receipt.hidden = false;
        if (clearReceiptButton) {
            clearReceiptButton.hidden = false;
        }
    }

    function clearAppointmentReceipt() {
        if (!receipt || !receiptName || !receiptEmail || !receiptService || !receiptDate || !receiptTime) {
            return;
        }

        receiptName.textContent = '-';
        receiptEmail.textContent = '-';
        receiptService.textContent = '-';
        receiptDate.textContent = '-';
        receiptTime.textContent = '-';
        receipt.hidden = true;

        if (clearReceiptButton) {
            clearReceiptButton.hidden = true;
        }
    }

    async function refreshSlotsForDate() {
        const selectedDate = dateInput.value;

        // Si no hay fecha, deja todos los horarios habilitados.
        if (!selectedDate) {
            setUnavailableSlots([]);
            return;
        }

        try {
            const response = await fetch(`api_citas.php?date=${encodeURIComponent(selectedDate)}`, {
                method: 'GET',
                cache: 'no-store'
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'No se pudo consultar disponibilidad.');
            }

            const occupiedTimes = Array.isArray(data.occupied_times) ? data.occupied_times : [];
            setUnavailableSlots(occupiedTimes);
        } catch (error) {
            setUnavailableSlots([]);
            message.textContent = error.message || 'No se pudo verificar disponibilidad de horarios.';
            message.className = 'appointment-message error';
        }
    }

    dateInput.addEventListener('change', async () => {
        resetSlotSelection();
        message.textContent = '';
        message.className = 'appointment-message';
        await refreshSlotsForDate();
    });

    slotButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.disabled) {
                return;
            }

            slotButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            selectedSlotTime = button.dataset.time || '';
            timeInput.value = selectedSlotTime;
            selectedTimeText.textContent = `Horario seleccionado: ${button.textContent.trim()}`;
        });
    });

    if (clearReceiptButton) {
        clearReceiptButton.addEventListener('click', () => {
            clearAppointmentReceipt();
            message.textContent = 'Comprobante ocultado del sitio. Tus datos siguen guardados en el sistema.';
            message.className = 'appointment-message success';
        });
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        message.className = 'appointment-message';

        if (!form.checkValidity()) {
            message.textContent = 'Completa todos los campos para confirmar la cita.';
            message.classList.add('error');
            form.reportValidity();
            return;
        }

        if (!selectedSlotTime) {
            message.textContent = 'Selecciona un horario disponible entre 9:00 AM y 3:00 PM.';
            message.classList.add('error');
            return;
        }

        const name = document.getElementById('appointment-name').value.trim();
        const email = document.getElementById('appointment-email').value.trim();
        const serviceSelect = document.getElementById('appointment-service');
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        const selectedSlotButton = slotButtons.find((item) => item.classList.contains('active'));
        const selectedSlotLabel = selectedSlotButton ? selectedSlotButton.textContent.trim() : selectedSlotTime;
        const fechaHora = `${dateInput.value} ${selectedSlotTime}:00`;

        // Sincroniza el hidden con la variable antes de enviar al backend.
        timeInput.value = selectedSlotTime;

        try {
            // Obtener token del checkbox reCAPTCHA v2
            const recaptchaToken = typeof grecaptcha !== 'undefined' ? grecaptcha.getResponse() : '';
            if (!recaptchaToken) {
                message.textContent = 'Confirma la casilla "No soy un robot" para continuar.';
                message.classList.add('error');
                return;
            }

            const payload = new URLSearchParams({
                nombre: name,
                email,
                servicio: serviceSelect.value,
                fecha: fechaHora,
                recaptcha_token: recaptchaToken
            });

            const response = await fetch('citas.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: payload.toString(),
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || data.mensaje || 'No se pudo guardar la cita en el servidor.');
            }

            message.textContent = data.mensaje || `Cita apartada para ${name} el ${dateInput.value} a las ${selectedSlotTime}. Te contactaremos en ${email} para confirmar (${serviceText}).`;
            message.classList.add('success');
            renderAppointmentReceipt({
                name,
                email,
                service: serviceText,
                date: dateInput.value,
                time: selectedSlotLabel
            });
            form.reset();
            if (typeof grecaptcha !== 'undefined') {
                grecaptcha.reset();
            }
            dateInput.min = minDate;
            resetSlotSelection();
            await refreshSlotsForDate();
        } catch (error) {
            message.textContent = error.message || 'Ocurrió un error al enviar la cita. Intenta nuevamente.';
            message.classList.add('error');
            if (typeof grecaptcha !== 'undefined') {
                grecaptcha.reset();
            }
        }
    });

    setUnavailableSlots([]);
    clearAppointmentReceipt();
})();

