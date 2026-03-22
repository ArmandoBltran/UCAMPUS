(function () {
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

    dateInput.addEventListener('change', () => {
        resetSlotSelection();
    });

    slotButtons.forEach((button) => {
        button.addEventListener('click', () => {
            slotButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            selectedSlotTime = button.dataset.time || '';
            timeInput.value = selectedSlotTime;
            selectedTimeText.textContent = `Horario seleccionado: ${button.textContent.trim()}`;
        });
    });

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
        const fechaHora = `${dateInput.value} ${selectedSlotTime}:00`;

        // Sincroniza el hidden con la variable antes de enviar al backend.
        timeInput.value = selectedSlotTime;

        try {
            const payload = new URLSearchParams({
                nombre: name,
                email,
                servicio: serviceSelect.value,
                fecha: fechaHora
            });

            const response = await fetch('citas.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: payload.toString()
            });

            const serverMessage = (await response.text()).trim();

            if (!response.ok) {
                throw new Error(serverMessage || 'No se pudo guardar la cita en el servidor.');
            }

            message.textContent = serverMessage || `Cita apartada para ${name} el ${dateInput.value} a las ${selectedSlotTime}. Te contactaremos en ${email} para confirmar (${serviceText}).`;
            message.classList.add('success');
            form.reset();
            dateInput.min = minDate;
            resetSlotSelection();
        } catch (error) {
            message.textContent = error.message || 'Ocurrió un error al enviar la cita. Intenta nuevamente.';
            message.classList.add('error');
        }
    });
})();
