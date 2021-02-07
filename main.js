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

// When the user scrolls down 20px from the top of the document, show the button.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var go_up = document.getElementById("myBtn");
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    go_up.style.display = "block";
  } else {
    go_up.style.display = "none";
  }
}
$(document).ready(function(){
 
$(document).scroll(function() {
  var y = $(this).scrollTop();
  var go_up = document.getElementById("myBtn");
  if (y > 800) {
    $('.elementToFadeInAndOut').fadeIn();
  } else {
    $('.elementToFadeInAndOut').fadeOut();
  }
}); 
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



