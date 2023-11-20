const openReview = document.querySelector('.landing__about__review');
const openReviewBlock = document.querySelector('.landing__about__review__list');
const openReviewText = document.getElementById('text__review');
const cardReview = document.getElementById('card__review');
const crossRotate = document.getElementById('cross');
const pagination = document.querySelector('.swiper-pagination');

crossRotate.addEventListener('click', e => {
    crossRotate.classList.toggle('cross__rotate');
    if (crossRotate.classList.contains('cross__rotate')) {
        openReviewText.innerText = '';
        openReviewBlock.classList.remove('inactive');
        openReviewBlock.classList.add('active');
        crossRotate.classList.add('black__fill');
        pagination.classList.remove('inactive');
        pagination.classList.add('active');
    } else {
        openReviewText.innerText = 'посмотреть все отзывы';
        openReviewBlock.classList.remove('active');
        openReviewBlock.classList.add('inactive');
        pagination.classList.remove('active');
        pagination.classList.add('inactive');
    }
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 2500,
    autoplay: {
        enabled: true,
        delay: 4000
    },

    navigation: {
        nextEl: '.swiper__btn__arrow-next',
        prevEl: '.swiper__btn__arrow',
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1050: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});


const swiperReview = new Swiper(".swiper-review", {
    direction: "horizontal",
    slidesPerView: 3,
    loop: true,
    speed: 2500,
    autoplay: {
        enabled: true,
        delay: 4000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    scrollbar: {
        el: ".swiper-scrollbar"
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        560: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        730: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1230: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});


