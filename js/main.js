var Swipes = new Swiper('.swiper-slide', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    cssMode: false,

});

$(window).scroll(function(){
    if ($(this).scrollTop() > 600) {
        $('.scroll-btn').fadeIn();
    } else {
        $('.scroll-btn').fadeOut();
    }
});
//Click event to scroll to top
$('.scroll-btn').click(function(){
    $('html, body').animate({scrollTop : 0},660);
    return false;
});

const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 400) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
};


// Project
var swiper = new Swiper(".slide-project", {
    slidesPerView: 4,
    spaceBetween: 100,
    cssMode: false,
    loop: false,
    centeredSlides: false,
    keyboard: {
        enabled: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        // dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        420: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });


  // navbar mobile
  $(function () {
    $(".navbar-toggler").click(function () {
      $(".menu").css({
        right: "0",
      });
  })

  $(".close-icon").click(function () {
      $(".menu").css({
        display: "none",
      });
  });
});


// let close = document.getElementById('close-icon');
// let menu = document.getElementById('menu');

// close.style.marginLeft = "-250px"

// $('#close-icon').click(function () {
//   $('.menu').css('margin-left', '-220px');
// });

// close.onclick= function() {
//   body.style.backgroundColor = "blue"

// }