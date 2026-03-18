document.addEventListener('DOMContentLoaded', () => {
    const cleanupFns = [];

    function setupCarousel(carouselRoot) {
        if (!carouselRoot) {
            return null;
        }

        let currentSlide = 0;
        const items = Array.from(carouselRoot.querySelectorAll('.carousel-item'));
        const indicators = Array.from(carouselRoot.querySelectorAll('.indicator'));
        const nextBtn = carouselRoot.querySelector('.carousel-btn-next');
        const prevBtn = carouselRoot.querySelector('.carousel-btn-prev');

        if (!items.length || !indicators.length) {
            return null;
        }

        let slideInterval = null;

        function showSlide(index) {
            currentSlide = (index + items.length) % items.length;

            items.forEach((item, i) => {
                const active = i === currentSlide;
                item.classList.toggle('active', active);
                item.setAttribute('aria-hidden', String(!active));
            });

            indicators.forEach((indicator, i) => {
                const active = i === currentSlide;
                indicator.classList.toggle('active', active);
                indicator.setAttribute('aria-current', active ? 'true' : 'false');
            });
        }

        function stopInterval() {
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
            }
        }

        function startInterval() {
            stopInterval();
            slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
        }

        function resetInterval() {
            stopInterval();
            startInterval();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentSlide + 1);
                resetInterval();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentSlide - 1);
                resetInterval();
            });
        }

        indicators.forEach((indicator, index) => {
            indicator.setAttribute('role', 'tab');
            indicator.setAttribute('tabindex', '0');
            indicator.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
            indicator.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    showSlide(index);
                    resetInterval();
                }
            });
        });

        carouselRoot.addEventListener('mouseenter', stopInterval);
        carouselRoot.addEventListener('mouseleave', startInterval);
        carouselRoot.addEventListener('focusin', stopInterval);
        carouselRoot.addEventListener('focusout', startInterval);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopInterval();
            } else {
                startInterval();
            }
        });

        showSlide(0);
        startInterval();
        return stopInterval;
    }

    const carousels = Array.from(document.querySelectorAll('[data-carousel]'));
    carousels.forEach((carouselRoot) => {
        const cleanup = setupCarousel(carouselRoot);
        if (cleanup) {
            cleanupFns.push(cleanup);
        }
    });

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

    // Manejo de tarjetas de Misión y Visión
    const missionVisionSection = document.querySelector('.mission-vision-section');
    const missionTrigger = document.getElementById('mission-card-trigger');
    const visionTrigger = document.getElementById('vision-card-trigger');

    if (missionTrigger && visionTrigger && missionVisionSection) {
        const setMissionState = (isOpen) => {
            missionVisionSection.classList.toggle('is-mission-revealed', isOpen);
            missionTrigger.setAttribute('aria-expanded', String(isOpen));
        };

        const setVisionState = (isOpen) => {
            missionVisionSection.classList.toggle('is-vision-revealed', isOpen);
            visionTrigger.setAttribute('aria-expanded', String(isOpen));
        };

        missionTrigger.addEventListener('click', () => {
            const isOpen = missionVisionSection.classList.contains('is-mission-revealed');
            setMissionState(!isOpen);
            // Cerrar visión si está abierta
            if (visionTrigger.getAttribute('aria-expanded') === 'true') {
                setVisionState(false);
            }
        });

        visionTrigger.addEventListener('click', () => {
            const isOpen = missionVisionSection.classList.contains('is-vision-revealed');
            setVisionState(!isOpen);
            // Cerrar misión si está abierta
            if (missionTrigger.getAttribute('aria-expanded') === 'true') {
                setMissionState(false);
            }
        });

        missionTrigger.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setMissionState(false);
            }
        });

        visionTrigger.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setVisionState(false);
            }
        });
    }

    window.addEventListener('beforeunload', () => {
        cleanupFns.forEach((cleanup) => cleanup());
    });
});