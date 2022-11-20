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
    slidesPerView: 1,
    spaceBetween: 10,
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
            pagination: {
              el: ".swiper-pagination-disabled",
              clickable: false,
            }
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination-disabled",
            clickable: true,
          }
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
          pagination: {
            el: ".swiper-pagination-disabled",
            clickable: true,
          }
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });



  

//   $(function () {
//     $(".navbar-toggler").click(function () {
//       $("body").css({
//         overflow: "hidden",
//       });
//   })

//   $("navbar-toggler").click(function () {
//       $("body").css({
//         overflow: "auto",
//       });
//   });
// });


$(document).ready(function() {
    $('.single-01').select2();
    $('.single-02').select2();
    $('.single-03').select2();
    $('.single-04').select2();
    $('.single-05').select2();
    $('.single-06').select2();
    $('.single-07').select2();
});



$(document).ready(()=>{
  let isMenuAlreadyOpen = false;
  $('.navbar-toggler-icon').on('click',()=>{
        $('body').css("overflow",isMenuAlreadyOpen?"auto":"hidden")
        isMenuAlreadyOpen = !isMenuAlreadyOpen
  })
})