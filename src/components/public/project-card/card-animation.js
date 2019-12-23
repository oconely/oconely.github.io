const cards = Array.from(document.querySelectorAll('.project-card'));
const config = {
    rootMargin: '0px 0px -200px 0px',
    treshold: 0
}
let observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCard(entry.target);
            // stop watching and load the image
            self.unobserve(entry.target);
        }
    });
}, config);

cards.forEach(c => {
    observer.observe(c);
});


function animateCard(card) {
    card.classList.add('animate');
}