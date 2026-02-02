document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.nav');
    const dropdownItems = document.querySelectorAll('.nav__item.has-dropdown');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav__link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });
});
