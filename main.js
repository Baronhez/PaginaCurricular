
//Force to load at top of the web page  
jQuery(document).ready(function(){
    jQuery(this).scrollTop(0);
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



// detect scroll top or down for the navbar

if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up'); 
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Movement Animation to happen in social media cards
const card = document.querySelector('.card');

//const cardcontainer = document.querySelector(".cardcontainer");
const cardcontainer = document.querySelector(".showcase");

//Items moving around with card
const title = document.querySelector('.title');
const twitterbird = document.querySelector('.avatar');
const follow = document.querySelector('.follow');
const description = document.querySelector('.gono');
const read = document.querySelector('.btn');

//Moving Animation Event
cardcontainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

//Reset Animation In
cardcontainer.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(125px)";   
    twitterbird.style.transform = "translateZ(200px) ";
    follow.style.transform = "translateZ(75px)";
    read.style.transform = "translateZ(60px)";
});

//Reset Animation Out
cardcontainer.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popout
    title.style.transform = "translateZ(0px)";
    twitterbird.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    follow.style.transform = "translateZ(0px)";
    read.style.transform = "translateZ(0px)";

 });


