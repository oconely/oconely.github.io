import { closest } from "../../../js/utils";

import './card-animation';
import './lazy-bgs';

const scrollImages = Array.from(document.querySelectorAll('.showcase-browser__img'));
let curTop;
let curY;
let curImg = null;
let curDown = false;
let bottom = 0;



const handleMouseDown = (e) => {
    // anim.stop();
    const { target } = e;
    const showcaseWindow = closest(target, el => el.classList.contains('showcase-browser__window'));
    curDown = true;
    curTop = target.offsetTop;
    curY = e.pageY;
    if (target != curImg) {
        curImg = target;
        bottom = target.clientHeight - showcaseWindow.clientHeight;
    }
    showcaseWindow.classList.add('grabbed');    
};

const handleMouseUp = e => {
    const showcaseWindow = closest(e.target, el => el.classList.contains('showcase-browser__window'));
    showcaseWindow.classList.remove('grabbed');    
    return curDown = false;
}

const handleMouseMove = e => {
    let newTop;
    if (curDown) {
        newTop = curY - e.pageY - curTop;
        if (newTop >= 0 && newTop <= bottom) {
            e.target.style = `top: -${newTop}px`;
        }
    }
}

scrollImages.forEach(img => {
    img.addEventListener('mousedown', handleMouseDown);
    img.addEventListener('mousemove', handleMouseMove);
    img.addEventListener('mouseup', handleMouseUp)
});