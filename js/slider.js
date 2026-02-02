window.addEventListener('load', () => {
    const track = document.querySelector('.master-classes__track');
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector('.slider-btn--prev');
    const nextBtn = document.querySelector('.slider-btn--next');

    const gap = 24;
    let isMoving = false;

    const slideWidth = slides[0].offsetWidth + gap;

    // 🔁 Клонируем ВСЕ слайды
    slides.forEach(slide => {
        track.appendChild(slide.cloneNode(true));
        track.insertBefore(slide.cloneNode(true), track.firstChild);
    });

    const allSlides = Array.from(track.children);
    let index = slides.length;

    track.style.transform = `translateX(-${index * slideWidth}px)`;

    function move() {
        isMoving = true;
        track.style.transition = 'transform 0.4s ease';
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (isMoving) return;
        index++;
        move();
    });

    prevBtn.addEventListener('click', () => {
        if (isMoving) return;
        index--;
        move();
    });

    track.addEventListener('transitionend', () => {
        track.style.transition = 'none';

        // если ушли слишком вправо
        if (index >= slides.length * 2) {
            index = slides.length;
            track.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        // если ушли слишком влево
        if (index <= slides.length - 1) {
            index = slides.length * 2 - 1;
            track.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        isMoving = false;
    });
});

// window.addEventListener('resize', () => {
//     const slideWidth = slides[0].getBoundingClientRect().width + slideGap;
//     track.style.transform = `translateX(-${index * slideWidth}px)`;
// });
