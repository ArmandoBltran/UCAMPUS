document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    const nextBtn = document.querySelector('.carousel-btn-next');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const carousel = document.querySelector('.carousel-container');

    let slideInterval = null;
    const startInterval = () => {
        stopInterval();
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    };
    const stopInterval = () => {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    };
    const resetInterval = () => {
        stopInterval();
        startInterval();
    };

    function showSlide(n) {
        if (!items.length || !indicators.length) return;
        currentSlide = (n + items.length) % items.length;

        items.forEach((item, i) => {
            const active = i === currentSlide;
            item.classList.toggle('active', active);
            item.setAttribute('aria-hidden', (!active).toString());
        });

        indicators.forEach((indicator, i) => {
            const active = i === currentSlide;
            indicator.classList.toggle('active', active);
            indicator.setAttribute('aria-current', active ? 'true' : 'false');
        });
    }

    // Controles
    if (nextBtn) nextBtn.addEventListener('click', () => { showSlide(currentSlide + 1); resetInterval(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { showSlide(currentSlide - 1); resetInterval(); });

    indicators.forEach((indicator, index) => {
        indicator.setAttribute('role', 'tab');
        indicator.setAttribute('tabindex', '0');
        indicator.addEventListener('click', () => { showSlide(index); resetInterval(); });
        indicator.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showSlide(index); resetInterval(); }
        });
    });

    // Pausar/resumir autoplay al interactuar o al cambiar visibilidad
    if (carousel) {
        carousel.addEventListener('mouseenter', stopInterval);
        carousel.addEventListener('mouseleave', startInterval);
        carousel.addEventListener('focusin', stopInterval);
        carousel.addEventListener('focusout', startInterval);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopInterval(); else startInterval();
    });

    // Navegación por teclado global
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { showSlide(currentSlide + 1); resetInterval(); }
        if (e.key === 'ArrowLeft') { showSlide(currentSlide - 1); resetInterval(); }
    });

    showSlide(0);
    startInterval();

    const modelSection = document.querySelector('.educational-model-section');
    const modelTrigger = document.getElementById('model-image-trigger');
    const modelReveal = document.getElementById('model-image-reveal');

    if (modelSection && modelTrigger && modelReveal) {
        const setRevealState = (isOpen) => {
            modelSection.classList.toggle('is-revealed', isOpen);
            modelTrigger.setAttribute('aria-expanded', String(isOpen));
            modelReveal.setAttribute('aria-hidden', String(!isOpen));
        };

        modelTrigger.addEventListener('click', () => {
            const isOpen = modelSection.classList.contains('is-revealed');
            setRevealState(!isOpen);
        });

        modelTrigger.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setRevealState(false);
            }
        });
    }

    window.addEventListener('beforeunload', stopInterval);
});