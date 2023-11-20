const swiperProject = new Swiper(".swiper-project", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 46,
    speed: 8000,
    autoHeight: true,
    autoplay: {
        enabled: true,
        delay: 5000
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination-project",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper__btn__arrow-next",
        prevEl: ".swiper__btn__arrow"
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.1,
            spaceBetween: 30
        },

        768: {
            slidesPerView: 1.2,
            spaceBetween: 36
        },

        1050: {
            slidesPerView: 2.2,
            spaceBetween: 46
        }
    }
});


const projectImgEl = document.querySelector('.landing__project__description')
const mediaQuery = window.matchMedia('(max-width: 495px)')
if (mediaQuery.matches) {
  let newImg = document.createElement('img')
  newImg.src = '../img/new_img/green-design.png';
  newImg.classList.add('landing__project__img-active')
  projectImgEl.appendChild(newImg)
}


