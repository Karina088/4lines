let arr = document.querySelectorAll('.landing__benefits__text');
let highlightedText = document.querySelector('.landing__benefits__text__small');
let textBenefits = document.getElementById('landing__benefits__text__content');
let blockBenefits = document.querySelector('.landing__benefits');

document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty(
        '--x', (
            e.clientX + window.scrollX
        ) +
        'px'
    );
    document.documentElement.style.setProperty(
        '--y', (
            e.clientY + window.scrollY
        ) +
        'px'
    );
}

$('body').on('click', '.smooth__scroll', function() {

    //по href ищем якорь с нужным именем
    pos = $('a[name=' + $(this).attr('href').replace(/^#/, '') + ']').offset();
    if (pos) {
        //скролим на эту позицию
        $("html, body").animate({ scrollTop: pos.top }, 600);

        //отключаем стандартный переход по ссылке
        return false;
    }

})

document.addEventListener('scroll', (e) => {
    const container = document.querySelector('.landing__container');
    const cardAboutFirst = document.getElementById('about__card__first');
    const cardAboutSecond = document.getElementById('about__card__second');
    const cardAboutThird = document.getElementById('about__card__third');
    const cardAboutReview = document.getElementById('card__review');

    if (scrollY >= 3400) {
        container.classList.add('dark__theme');
        cardAboutFirst.classList.add('white__theme');
        cardAboutSecond.classList.add('white__theme');
        cardAboutThird.classList.add('white__theme');
        cardAboutReview.classList.add('white__theme');
    } else if (scrollY <= 2750) {
        container.classList.remove('dark__theme');
        cardAboutFirst.classList.remove('white__theme');
        cardAboutSecond.classList.remove('white__theme');
        cardAboutThird.classList.remove('white__theme');
        cardAboutReview.classList.remove('white__theme');
    }
});