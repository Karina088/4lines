let number = document.querySelector('.number')
let numberTop = number.getBoundingClientRect().top
let start = +number.innerHTML
let end = +number.dataset.max

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll)
        let interval = setInterval(function () {
            number.innerHTML = ++start;
            if (start == end) {
                clearInterval(interval)
            }
        }, 80)
    }
})

let numberTwoEl = document.querySelector('.number_two')
let numberTwoTop = numberTwoEl.getBoundingClientRect().top
let startTwo = +numberTwoEl.innerHTML
let endTwo = +numberTwoEl.dataset.max

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTwoTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll)
        let intervalTwo = setInterval(function () {
            numberTwoEl.innerHTML = ++startTwo
            if (startTwo == endTwo) {
                clearInterval(intervalTwo)
            }
        }, 80)
    }
})

let numberTreeEl = document.querySelector('.number_tree')
let numberTreeTop = numberTreeEl.getBoundingClientRect().top
let startTree = +numberTreeEl.innerHTML
let endTree = +numberTreeEl.dataset.max

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTreeTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let intervalTree = setInterval(function () {
            numberTreeEl.innerHTML = ++startTree
            if (startTree == endTree) {
                clearInterval(intervalTree)
            }
        }, 80)
    }
})
