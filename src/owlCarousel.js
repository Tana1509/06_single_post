jQuery(document).ready(function($) {

  $('.heading__slaider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // Передача полномочий кастомным кнопкам

  let owl = $('.owl-carousel');
  owl.owlCarousel();
  //$(".next") - находим нашу кнопку
  $('.owl-nav_arrow_next').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.owl-nav_arrow_prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
});
