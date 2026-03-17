document.addEventListener('DOMContentLoaded', () => {
    const clubeCards = document.querySelectorAll('.clube-card');
    const clickCounts = {};

    clubeCards.forEach((card) => {
        const type = card.dataset.type || 'default';
        clickCounts[type] = 0;

        card.addEventListener('click', (e) => {
            e.preventDefault();

            clickCounts[type] += 1;
            card.classList.add('active');
            card.classList.add('double-click');

            setTimeout(() => {
                card.classList.remove('double-click');
            }, 600);

            if (clickCounts[type] === 2) {
                const link = card.dataset.link;
                if (link) window.location.href = link;
                clickCounts[type] = 0;
            }

            clearTimeout(card.clickTimeout);
            card.clickTimeout = setTimeout(() => {
                clickCounts[type] = 0;
                card.classList.remove('active');
            }, 1500);
        });

        card.addEventListener('mouseenter', () => {
            card.classList.add('active');
        });

        card.addEventListener('mouseleave', () => {
            if (clickCounts[type] === 0) card.classList.remove('active');
        });
    });

    const detailCards = document.querySelectorAll('[data-club-card]');
    detailCards.forEach((card) => {
        const button = card.querySelector('.club-image-button');
        if (!button) return;

        button.addEventListener('click', () => {
            const isOpen = card.classList.toggle('is-open');
            button.setAttribute('aria-expanded', String(isOpen));
        });
    });
});