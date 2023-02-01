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

      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          }
        },{
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },{
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        },{
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          },
        }
      ],
    });

    $('.lady-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      fade: true,
      speed: 500,
      cssEase: 'linear',
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
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
          },
        }
      ],
    });

  }


  slickSLider() {

  }

}