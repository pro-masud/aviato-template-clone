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




})(jQuery);
