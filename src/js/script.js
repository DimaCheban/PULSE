$(document).ready(function(){
    $('.carousel__inner').slick({
       speed: 1200,
       adaptiveHeight: true, 
       prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></buttton>',
       nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></buttton>',
       responsive: [
            {
                breakpoint: 992,
                settings: {
                    // $lidesToShow: 3,
                    // slidesToScroll: 3,
                    // infinity: true,
                    dots: true,
                    arrows: false
                }
            }
       ]
      });
  });