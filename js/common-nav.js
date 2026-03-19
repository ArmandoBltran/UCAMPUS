document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggleButtons = document.querySelectorAll('.nav-theme-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const navPrev = document.getElementById('nav-prev');
    const navNext = document.getElementById('nav-next');
    const navMobileItems = document.querySelectorAll('.nav-mobile-item');
    const navDesktop = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    const navItems = document.querySelectorAll('.nav-item-dropdown > a');
    const sidebars = document.querySelectorAll('.sidebar');

    let currentNavItem = 0;
    const THEME_STORAGE_KEY = 'ucampus-theme';

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }

        const isDark = theme === 'dark';
        themeToggleButtons.forEach((button) => {
            button.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
            button.setAttribute('aria-pressed', String(isDark));
            button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
            button.setAttribute('title', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
        });
    }

    function getInitialTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function toggleTheme() {
        const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    }

    applyTheme(getInitialTheme());

    themeToggleButtons.forEach((button) => {
        button.addEventListener('click', toggleTheme);
    });

    function updateMobileNav(index) {
        if (!navMobileItems.length) return;

        currentNavItem = (index + navMobileItems.length) % navMobileItems.length;
        navMobileItems.forEach((item, i) => {
            item.classList.toggle('active', i === currentNavItem);
        });
    }

    function navigateTo(url) {
        if (!url) return;
        if (url.startsWith('http')) {
            window.open(url, '_blank');
            return;
        }
        window.location.href = url;
    }

    if (navMobileItems.length > 0) {
        if (navPrev) {
            navPrev.addEventListener('click', () => {
                updateMobileNav(currentNavItem - 1);
            });
        }

        if (navNext) {
            navNext.addEventListener('click', () => {
                updateMobileNav(currentNavItem + 1);
            });
        }

        navMobileItems.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.dataset.action === 'toggle-theme') {
                    toggleTheme();
                    return;
                }
                navigateTo(item.dataset.link);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (window.innerWidth <= 768 && navMobile && navMobile.style.display !== 'none') {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    updateMobileNav(currentNavItem - 1);
                }
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    updateMobileNav(currentNavItem + 1);
                }
                if (e.key === 'Enter') {
                    const activeItem = navMobileItems[currentNavItem];
                    if (activeItem && activeItem.dataset.action === 'toggle-theme') {
                        toggleTheme();
                    } else if (activeItem) {
                        navigateTo(activeItem.dataset.link);
                    }
                }
            }
        });

        updateMobileNav(0);
    }

    if (hamburger && navDesktop) {
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.classList.toggle('active');
            navDesktop.classList.toggle('nav-open', expanded);
            hamburger.setAttribute('aria-expanded', String(expanded));
        });

        const allLinks = document.querySelectorAll('.nav-menu a');
        allLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    hamburger.classList.remove('active');
                    navDesktop.classList.remove('nav-open');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        navItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    const parent = item.parentElement;
                    if (parent) parent.classList.toggle('active');
                }
            });
        });
    }

    function updateNavDisplay() {
        if (window.innerWidth <= 768) {
            if (navMobile) navMobile.style.display = 'flex';
            if (navDesktop) navDesktop.style.display = 'none';
        } else {
            if (navMobile) navMobile.style.display = 'none';
            if (navDesktop) navDesktop.style.display = 'flex';
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                if (navDesktop) navDesktop.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }

        if (window.innerWidth > 900 && hamburger && navDesktop) {
            hamburger.classList.remove('active');
            navDesktop.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }

    window.addEventListener('resize', updateNavDisplay);
    updateNavDisplay();

    if (sidebars.length > 0) {
        const closeAllSidebars = () => {
            sidebars.forEach((sidebar) => sidebar.classList.remove('is-open'));
        };

        sidebars.forEach((sidebar) => {
            sidebar.setAttribute('tabindex', '0');

            sidebar.addEventListener('click', (event) => {
                if (window.innerWidth > 768) return;

                const clickedLink = event.target.closest('.important-links a');
                if (clickedLink) return;

                const shouldOpen = !sidebar.classList.contains('is-open');
                closeAllSidebars();
                if (shouldOpen) {
                    sidebar.classList.add('is-open');
                }
            });

            sidebar.addEventListener('keydown', (event) => {
                if (window.innerWidth > 768) return;

                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    const shouldOpen = !sidebar.classList.contains('is-open');
                    closeAllSidebars();
                    if (shouldOpen) {
                        sidebar.classList.add('is-open');
                    }
                }

                if (event.key === 'Escape') {
                    sidebar.classList.remove('is-open');
                }
            });
        });

        document.addEventListener('click', (event) => {
            if (window.innerWidth > 768) return;
            if (event.target.closest('.sidebar')) return;
            closeAllSidebars();
        });
    }

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    const siteFooter = document.querySelector('.site-footer');
    if (siteFooter) {
        const revealThreshold = 20;
        let isTicking = false;

        siteFooter.classList.add('footer-gated');
        siteFooter.setAttribute('aria-hidden', 'true');

        const updateFooterVisibility = () => {
            const scrollBottom = window.scrollY + window.innerHeight;
            const fullHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            const isAtBottom = scrollBottom >= fullHeight - revealThreshold;

            siteFooter.classList.toggle('is-visible', isAtBottom);
            siteFooter.setAttribute('aria-hidden', String(!isAtBottom));
            isTicking = false;
        };

        const onScrollFooter = () => {
            if (isTicking) return;
            isTicking = true;
            window.requestAnimationFrame(updateFooterVisibility);
        };

        window.addEventListener('scroll', onScrollFooter, { passive: true });
        window.addEventListener('resize', onScrollFooter);
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(updateFooterVisibility);
        });
    }

    const opcionesBachiller = document.querySelectorAll('.bach-option');
    const panelDefault = document.getElementById('bach-info-default');
    const panelDetail = document.getElementById('bach-info-detail');
    const infoTitle = document.getElementById('bach-info-title');
    const infoModalidad = document.getElementById('bach-info-modalidad');
    const infoDuracion = document.getElementById('bach-info-duracion');
    const infoHorario = document.getElementById('bach-info-horario');
    const infoPdf = document.getElementById('bach-info-pdf');
    const infoPlan = document.getElementById('bach-info-plan');
    const profileDetails = document.getElementById('bach-profile-details');
    const profileText = document.getElementById('bach-profile-text');
    const btnResetPanel = document.getElementById('bach-info-reset');

    if (
        opcionesBachiller.length > 0 &&
        panelDefault &&
        panelDetail &&
        infoTitle &&
        infoModalidad &&
        infoDuracion &&
        infoHorario &&
        infoPdf &&
        infoPlan &&
        profileDetails &&
        profileText &&
        btnResetPanel
    ) {
        const programas = {
            general: {
                titulo: 'General',
                modalidad: 'Presencial / En línea',
                duracion: '3 años',
                horario: 'Matutino / Vespertino',
                pdf: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257109.pdf',
                plan: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257109.pdf',
                perfil: 'La persona egresada del bachillerato general desarrolla pensamiento critico, comunicacion efectiva, habilidades digitales y bases academicas solidas para continuar estudios superiores en distintas areas.'
            },
            'administracion-bilingue': {
                titulo: 'Administración Bilingüe',
                modalidad: 'Presencial / En línea',
                duracion: '3 años',
                horario: 'Matutino / Vespertino',
                pdf: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257110.pdf',
                plan: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257110.pdf',
                perfil: 'La persona egresada de administracion bilingue integra fundamentos de gestion, organizacion y servicio al cliente en espanol e ingles para apoyar procesos administrativos.'
            },
            contabilidad: {
                titulo: 'Contabilidad',
                modalidad: 'Presencial / En línea',
                duracion: '3 años',
                horario: 'Matutino / Vespertino',
                pdf: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257112.pdf',
                plan: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257112.pdf',
                perfil: 'La persona egresada de contabilidad aplica principios de registro, control financiero y analisis basico de costos para colaborar en el manejo contable de una organizacion.'
            },
            'mantenimiento-industrial': {
                titulo: 'Mantenimiento Industrial',
                modalidad: 'Presencial / En línea',
                duracion: '3 años',
                horario: 'Matutino / Vespertino',
                pdf: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257113.pdf',
                plan: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257113.pdf',
                perfil: 'La persona egresada de mantenimiento industrial identifica fallas, ejecuta rutinas preventivas y aplica normas de seguridad para conservar maquinaria y equipos en buen estado.'
            },
            programacion: {
                titulo: 'Programación',
                modalidad: 'Presencial / En línea',
                duracion: '3 años',
                horario: 'Matutino / Vespertino',
                pdf: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257114.pdf',
                plan: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257114.pdf',
                perfil: 'La persona egresada de programacion disena soluciones basicas de software, desarrolla codigo estructurado y participa en proyectos digitales con enfoque en logica y calidad.'
            },
            ventas: {
                titulo: 'Ventas',
                modalidad: 'Presencial / En línea',
                duracion: '3 años',
                horario: 'Matutino / Vespertino',
                pdf: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257115.pdf',
                plan: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257115.pdf',
                perfil: 'La persona egresada de ventas domina tecnicas de prospeccion, negociacion y seguimiento comercial para promover productos o servicios con orientacion al cliente.'
            },
            'relaciones-publicas': {
                titulo: 'Relaciones Públicas y Organización de Eventos',
                modalidad: 'Presencial / En línea',
                duracion: '3 años',
                horario: 'Matutino / Vespertino',
                pdf: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257162.pdf',
                plan: 'https://ucarolina.edu.mx/rvoes/RVOE-0527257162.pdf',
                perfil: 'La persona egresada de relaciones publicas y organizacion de eventos planifica actividades institucionales, gestiona comunicacion con audiencias y fortalece la imagen organizacional.'
            }
        };

        const limpiarSeleccion = () => {
            opcionesBachiller.forEach((opcion) => {
                opcion.classList.remove('is-active');
                opcion.setAttribute('aria-pressed', 'false');
            });
        };

        const mostrarEspecializados = () => {
            panelDefault.hidden = false;
            panelDetail.hidden = true;
            profileDetails.open = false;
            limpiarSeleccion();
        };

        const actualizarPanelBachiller = (idPrograma) => {
            const dataPrograma = programas[idPrograma];
            if (!dataPrograma) return;

            panelDefault.hidden = true;
            panelDetail.hidden = false;

            infoTitle.textContent = dataPrograma.titulo;
            infoModalidad.textContent = dataPrograma.modalidad;
            infoDuracion.textContent = dataPrograma.duracion;
            infoHorario.textContent = dataPrograma.horario;
            infoPdf.href = dataPrograma.pdf;
            infoPlan.href = dataPrograma.plan;
            profileText.textContent = dataPrograma.perfil;
            profileDetails.open = false;

            opcionesBachiller.forEach((opcion) => {
                const activa = opcion.dataset.programa === idPrograma;
                opcion.classList.toggle('is-active', activa);
                opcion.setAttribute('aria-pressed', String(activa));
            });
        };

        opcionesBachiller.forEach((opcion) => {
            opcion.addEventListener('click', () => {
                actualizarPanelBachiller(opcion.dataset.programa);
            });
        });

        btnResetPanel.addEventListener('click', () => {
            mostrarEspecializados();
        });

        mostrarEspecializados();
    }
});
