import 'slick-carousel';
export class App {
    init() {

        $('.team-slider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: false,
            slidesToShow: 8,
            // fade: true,
            cssEase: 'linear',
            prevArrow: $(".slider--prev"),
            nextArrow: $(".slider--next"),
          });

          $('.testimonial-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear',
            prevArrow: $(".slider--prev3"),
            nextArrow: $(".slider--next3"),
          });

          $('.main-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear',
            prevArrow: $(".slider--prev3"),
            nextArrow: $(".slider--next3"),
          });
          $('.logo-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 7,
            cssEase: 'linear',
          });
    
    }
    

    slickSLider (){

    }

}