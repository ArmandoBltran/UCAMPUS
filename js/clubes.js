document.addEventListener('DOMContentLoaded', () => {
    const clubeCards = document.querySelectorAll('.clube-card');

    clubeCards.forEach((card) => {
        card.addEventListener('pointerenter', () => {
            card.classList.add('active');
        });

        card.addEventListener('pointerleave', () => {
            card.classList.remove('active');
        });

        card.addEventListener('focus', () => {
            card.classList.add('active');
        });

        card.addEventListener('blur', () => {
            card.classList.remove('active');
        });
    });

});