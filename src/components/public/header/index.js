const pageHeader = document.querySelector('.page-header');
const mq = window.matchMedia("(max-width: 768px)");
let lastScrollTop = 0;

function onMqChange() {
    if (mq.matches) {
        if (pageHeader.classList.contains('page-header_slim')) {
            pageHeader.classList.remove('page-header_slim')
        }
    } else {
        const scrollFromTop = window.pageYOffset || document.documentElement.scrollTop;    
        if (scrollFromTop > 80) {
            pageHeader.classList.add('page-header_slim');
        }
    }
}
function handleScroll() {
    const scrollFromTop = window.pageYOffset || document.documentElement.scrollTop;
    // if (window.innerWidth < 970) return;
    if (scrollFromTop > lastScrollTop) {
        if (scrollFromTop > 80) {
            pageHeader.classList.add('page-header_slim');
        }
    } else {
        if (scrollFromTop < 350) {
            pageHeader.classList.remove('page-header_slim');
        }
    }
    lastScrollTop = scrollFromTop <= 0 ? 0 : scrollFromTop;
}
handleScroll();
mq.addListener(onMqChange);
window.addEventListener('scroll', handleScroll, { passive: true });