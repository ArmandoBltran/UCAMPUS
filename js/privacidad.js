// ── Tab switching ──
(function () {
    var tabs   = document.querySelectorAll('.priv-tab-btn[role="tab"]');
    var panels = document.querySelectorAll('.priv-panel[role="tabpanel"]');

    tabs.forEach(function (btn) {
        btn.addEventListener('click', function () {
            tabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            panels.forEach(function (p) { p.classList.remove('active'); });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            document.getElementById(btn.getAttribute('aria-controls')).classList.add('active');
        });
    });

    // Open "Términos" tab if URL hash is #terminos
    if (window.location.hash === '#terminos') {
        document.getElementById('tab-terminos').click();
    }
})();

// ── Footer year ──
var y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
