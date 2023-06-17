let nav = document.querySelector('#nav')
let navButton = document.querySelector('#nav-button')
let navButtonImg = document.querySelector('#button-img')

navButton.addEventListener('click', () => {
    if (nav.classList.toggle('open')) {
        navButtonImg.src = "./img/icons/NAV_close.svg"
    } else {
        navButtonImg.src = "./img/icons/NAV_open.svg"
    }
})