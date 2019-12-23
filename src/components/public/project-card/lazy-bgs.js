import createLazyImages from "../../../js/createLazyImages";

const loadBg = (src, el) => {
    const img = new Image();
    img.src = src;
    img.onload = () => el.style.backgroundImage = `url(${src})`;
};

const imgDidLoad = (el, observer) => {
    const src = el.getAttribute('data-hd-bg');
    if (!src) return;
    loadBg(src, el);
}

const config = {
    selector: "[data-hd-bg]",
    imgDidLoad
}

createLazyImages(config);