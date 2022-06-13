$(document).ready(function(){


  // main play btn
  $(document).ready(function(){
      $('#play-btn').on('click', function () {
        mainSwiper1.autoplay.start();
        return false;
      });

      $('#stop-btn').on('click', function () {
        mainSwiper1.autoplay.stop();
        return false;
      });
    });



  // product 상품 hover 
  $('.product-pic').hover(function(){
    $(this).find('.pic-hover').stop().fadeIn();
  }, function(){
    $(this).find('.pic-hover').stop().fadeOut();
  });



  // like button
  $('span.like-icon').on('click', function(){

    if($(this).hasClass('active')){
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });



  // product 메뉴, 슬라이드 연동
  $('.product-menu li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');

    if($('.product-menu> :nth-child(1)').hasClass('on')) {
      $('.product> :nth-child(1)').addClass('on').siblings().removeClass('on');
    } else if($('.product-menu> :nth-child(2)').hasClass('on')) {
      $('.product> :nth-child(2)').addClass('on').siblings().removeClass('on');
    } else if($('.product-menu> :nth-child(3)').hasClass('on')) {
      $('.product> :nth-child(3)').addClass('on').siblings().removeClass('on');
    } else {
      $('.product> :nth-child(4)').addClass('on').siblings().removeClass('on');
    }

  });





});



// main slide
var mainSwiper1 = new Swiper('main .swiper-container', {
  effect: 'fade',
  slidesPerView: 1,
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "main .swiper-pagination",
    clickable: true,
  },
});



// produdct slide
var swiper = new Swiper('.product .swiper-container', {
  autoHeight: false,
  slidesPerView: 1.5,
  spaceBetween: 20,
  pagination: {
    el: ".product .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },      
});



// review slide
var swiper = new Swiper('.review .swiper-container', {
  autoHeight: false,
  freeMode: true,
  slidesPerView : 1,
  spaceBetween: 20,
  navigation: {
    prevEl: '.review .swiper-button-prev',
    nextEl: '.review .swiper-button-next',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});



// magazine slide 및 연동
var mainSwiper = new Swiper('.magazine-main .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,
  navigation: {
    prevEl: '.magazine .swiper-button-prev',
    nextEl: '.magazine .swiper-button-next',
  },
});

var subSwiper = new Swiper('.magazine-sub .swiper-container', {
  // resistanceRatio: 0,
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 1000,
});

mainSwiper.controller.control = subSwiper;
subSwiper.controller.control = mainSwiper;



// show slide
var swiper = new Swiper('.show .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".show .swiper-pagination",
    clickable: true,
  },      
});



// sns slide
var swiper = new Swiper('.sns .swiper-container', {
  slidesPerView : 1.5,
  spaceBetween: 10,
  navigation: {
    prevEl: '.sns .swiper-button-prev',
    nextEl: '.sns .swiper-button-next',
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
  },
});