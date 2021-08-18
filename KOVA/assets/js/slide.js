$(document).ready(function () {
    $("#slide-banner").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
    //   autoplay: true,
    //   autoplayTimeout: 2000,
      items: 1,
      dots: false,
    });
    $("#slidein-banner").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      items: 1,
      dots: false,
    });
    $("#slide-sanpham_home").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: ["<img src='./assets/img/prev.png'>","<img src='./assets/img/next.png'>"],
      items: 3,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        321: {
          items: 1,
        },
        400: {
          items: 1.2,
        },
        600: {
          items: 1.7,
        },
        800: {
          items: 2.2,
        },
        1000: {
          items: 3,
        },
      },
    });
    $("#slide-tintuc").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      items: 3,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        321: {
          items: 1,
        },
        400: {
          items: 1.2,
        },
        600: {
          items: 1.7,
        },
        800: {
          items: 2.2,
        },
        1000: {
          items: 3,
        },
      },
    });
    $("#slide_videonoibat").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: ["<img src='./assets/img/prev2.png'>","<img src='./assets/img/next2.png'>"],
      items: 2,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        321: {
          items: 1,
        },
        400: {
          items: 1.2,
        },
        600: {
          items: 1.7,
        },
        800: {
          items: 2.2,
        },
        1000: {
          items: 2,
        },
      },
    });
    $("#slide_tinnoibat").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: ["<img src='./assets/img/prev2.png'>","<img src='./assets/img/next2.png'>"],
      items: 2,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        321: {
          items: 1,
        },
        400: {
          items: 1.2,
        },
        600: {
          items: 1.7,
        },
        800: {
          items: 2.2,
        },
        1000: {
          items: 2,
        },
      },
    });
    $("#slide_albumnoibat").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: ["<img src='./assets/img/prev2.png'>","<img src='./assets/img/next2.png'>"],
      items: 2,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        321: {
          items: 1,
        },
        400: {
          items: 1.2,
        },
        600: {
          items: 1.7,
        },
        800: {
          items: 2.2,
        },
        1000: {
          items: 2,
        },
      },
    });
    $('.img-slide_item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      fade: true,
    });
    $('.slide1_tnb').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev1.png' alt=''></button>",
      nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
      asNavFor: '.slide2_tnb'
    });
    $('.slide2_tnb').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slide1_tnb',
      arrows: false,
      dots: false,
      fade: true,
    });
});