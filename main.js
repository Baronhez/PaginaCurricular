document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.life-cards', { delay: 250 });
ScrollReveal().reveal('.cards-banner-one', { delay: 250 });
ScrollReveal().reveal('.cards-banner-two', { delay: 250 });
  