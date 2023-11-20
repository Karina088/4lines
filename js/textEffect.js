'use strict';
const inputTextLabel = document.querySelectorAll('.landing__input__label');
    const inputTextFirst = document.getElementById('landing__form__input__first');
    const inputTextSecond = document.getElementById('landing__form__input__second');

    inputTextFirst.addEventListener('click', (event) => {
        inputTextLabel[0].classList.add('animate__backOutUp');
        setTimeout(() => {
            inputTextLabel[0].classList.add('inactive');
        }, 700);
    });
    inputTextSecond.addEventListener('click', (event) => {
        inputTextLabel[1].classList.add('animate__backOutUp');
        setTimeout(() => {
            inputTextLabel[1].classList.add('inactive');
        }, 700);
    });