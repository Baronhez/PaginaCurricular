document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});
$(document).ready(function(){
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.elementToFadeInAndOut').fadeIn();
  } else {
    $('.elementToFadeInAndOut').fadeOut();
  }
});
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.life-cards', { delay: 250 });
ScrollReveal().reveal('.cards-banner-one', { delay: 250 });
ScrollReveal().reveal('.cards-banner-two', { delay: 250 });
ScrollReveal().reveal('.cards-banner-two', { delay: 250 });
ScrollReveal().reveal('.cards-banner-two', { delay: 250 });

/*Button to go top*/
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
