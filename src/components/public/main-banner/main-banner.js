import createLazyImages from "../../../js/createLazyImages";

const imgDidLoad = el => {
    const imgSrc = el.getAttribute('data-banner-bg');
    if (imgSrc) {
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
            el.style.backgroundImage = `url(${imgSrc})`;
        }
    }
}

createLazyImages({
    selector: '[data-banner-bg]',
    imgDidLoad
})