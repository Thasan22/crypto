$(document).ready(function(){
    $('.logoSlider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        loop: true,



        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 5,
                
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    });

    $('.reviews').slick({
      slidesToShow:2,
      prevArrow: `.arrows .leftArrow`,
      nextArrow: `.arrows .rightArrow`,
    });

    //AOS animation
    AOS.init();


  });