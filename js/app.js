const preloader = document.querySelector('.landing__preloader')

window.addEventListener('DOMContentLoaded', (event) => {
	setTimeout(() => {
		preloader.classList.add('inactive')
	}, 2000)
})

    const hamburger = document.querySelector('.landing__header__hamburger')
    const menuList = document.querySelector('.landing__header__menu')
    const popupExitBtn = document.querySelector('.landing__popup__menu__exit__button')
    const popupCanvas = document.querySelector('.landing__popup__menu__canvas')
    const popupCanvasLine = document.querySelector('.landing__popup__menu__canvas__line')
    const landingHeader = document.querySelector('.landing__header')

    document.addEventListener('scroll', (e) => {
        if (window.pageYOffset >= 200) {
        menuList.remove('landing__header__menu')
        hamburger.classList.add('active')
        landingHeader.classList.add('align__items__center')
        }
    })

    hamburger.addEventListener('click', (e) => {
        popupCanvas.classList.remove('inactive')
        popupCanvas.classList.add('activeFlex')
        popupCanvasLine.classList.remove('inactive')
        popupCanvasLine.classList.add('activeFlex')
    })

    popupExitBtn.addEventListener('click', (e) => {
        popupCanvas.classList.remove('activeFlex')
        popupCanvas.classList.add('inactive')
    })

    const calculateContainer = document.querySelector('.landing__calculate')
    const calculateContainerTitle = document.querySelector('.landing__calculate__title')
    const calculateLine = document.getElementById('calculate__line')
    const calculateOfferTitle = document.querySelector('.landing__calculate__offer')
    const calculateOfferBtn = document.querySelector('.landing__calculate__offer__button')
    const modalWindow = document.querySelector('.modal__window')
    
    calculateOfferBtn.addEventListener('click', (e) => {
            modalWindow.classList.remove('inactive')
            modalWindow.classList.add('active')
        })

    // document.addEventListener('scroll', () => {
    //     if (scrollY > 3350 && scrollY < 4300) {
    //         calculateContainer.classList.add('black__background')
    //         calculateLine.classList.remove('white__background')
    //         calculateLine.classList.remove('black__border')
    //         calculateLine.classList.add('white__border')
    //         calculateContainerTitle.classList.remove('black__color')
    //         calculateContainerTitle.classList.add('white__color')
    //         calculateOfferTitle.classList.remove('black__color')
    //         calculateOfferTitle.classList.add('white__color')
    //         calculateOfferBtn.classList.add('white__background')
    //         calculateOfferBtn.classList.add('black__color')
    //     }
    // })