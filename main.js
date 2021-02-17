document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.life-cards', { delay: 250 });
ScrollReveal().reveal('.cards-banner-one', { delay: 250 });
ScrollReveal().reveal('.cards-banner-two', { delay: 250 });
ScrollReveal().reveal('.social', { delay: 250 });
ScrollReveal().reveal('.slider', { delay: 250 });
ScrollReveal().reveal('.footercontainer', { delay: 250 });
ScrollReveal().reveal('.form', { delay: 250 });
ScrollReveal().reveal('.footer', { delay: 250 });

// 



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



