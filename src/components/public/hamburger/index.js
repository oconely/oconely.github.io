import { onTransitionEndHandler, debounce } from "../../../js/utils";

const htmlElement = document.documentElement;
const hamburger = document.querySelector('.hamburger');
const hamburgerLine = hamburger.querySelector('.hamburger__line');
const nav = document.querySelector('.page-header__nav');
const overlay = document.querySelector('.overlay-bg');

hamburgerLine.classList.add('hamburger__line_anim');

// state
let transitionActive = false;
let lastWinWidth = window.innerWidth;

function handleClick(e) {
    if (transitionActive) return;
    transitionActive = true;
    htmlElement.classList.toggle('mobMenu_open');
    nav.classList.add('page-header__nav_anim');
    overlay.classList.add('overlay-bg_anim');
}

function handleTransitionEnd(event) {
    onTransitionEndHandler(
        'transform', 
        () => {
            nav.classList.remove('main-menu_anim');
            overlay.classList.remove('overlay-bg_anim');
            transitionActive = false;
        }, 
        'page-header__nav',
        event
    );
}

function handleEscapeKeyDown(e) {
    if (e.key === 'Escape' && htmlElement.classList.contains('fixed')) {
        handleClick();
    }
}

function handleResize() {
    if (window.innerWidth !== lastWinWidth) {
        if (htmlElement.classList.contains('mobMenu_open')) {
            nav.classList.remove('page-header__nav_anim');
            overlay.classList.remove('overlay-bg_anim');
            htmlElement.classList.remove('mobMenu_open');
            transitionActive = false;
            lastWinWidth = window.innerWidth;
        }
    }
}

nav.addEventListener('transitionend', handleTransitionEnd);
hamburger.addEventListener('click', handleClick);
overlay.addEventListener('click', handleClick);
document.addEventListener('keydown', handleEscapeKeyDown);

window.addEventListener('resize', debounce(handleResize, 400));