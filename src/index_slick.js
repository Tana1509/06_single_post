jQuery(document).ready(function($) {
  $(".slider__pic").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    // slidesToScroll: 0,
    asNavFor: ".slider__pic",
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    speed: 1000,
    infinite: false,
  });

  // добавляем функцию он клик для кнопки share после слайдера
  let shareBtn = $(".socials__btn");
  shareBtn.on("click", function () {
    let navigation = $(".socials__icons");
    navigation.toggleClass("active");
  });
  // переключени темы
  let body = $("body");
  let switchBtn = $(".switch-btn");
  if (localStorage.getItem("theme") === "dark") {
    body.addClass("dark");
    switchBtn.addClass("switch-on");
  }
  switchBtn.on("click", function () {
    $(this).toggleClass("switch-on");

    if ($(this).hasClass("switch-on")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    if (localStorage.getItem("theme") === "dark") {
      body.addClass("dark");
    }
    if (localStorage.getItem("theme") === "light") {
      body.removeClass("dark");
    }
  });

});
