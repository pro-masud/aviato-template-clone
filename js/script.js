/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
 

//  hero Slider

$('.hero-slider').slick({
  // autoplay:true,
  infinite: true,
  arrows: true,
  prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
  nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
  dots: true,
  autoplaySpeed: 7000,
  pauseOnFocus: false,
  pauseOnHover: false
});

$('.hero-slider').slickAnimation();





  // Count Down JS
  $('#simple-timer').syotimer({
    year: 2023,
    month: 9,
    day: 24,
    hour: 20,
    minute: 30
  });



  // video testimonial lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  
  // e-commerce touchspin
  $('input[name=\'product-quantity\']').TouchSpin();



})(jQuery);
