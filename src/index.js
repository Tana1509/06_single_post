jQuery(document).ready(function($) {
  //burger
  let menuBtn = $(".header__burger");
  menuBtn.on("click", function() {
    let navigation = $(".header__nav__list");
    navigation.toggleClass("active");
  });

  // кнопка "наверх"
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".to_top").fadeIn();
    } else {
      $(".to_top").fadeOut();
    }
  });
  $(".to_top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
  


  //form validation
  $(".blog__post__form_name").on("input", function() {
    let count = $(".blog__post__form_name").val().length;
    console.log(count);
    let minCount = 3;
  });
  $(".blog__post__form_message").on("input", function() {
    let count = $(".blog__post__form_message").val().length;
    console.log(count);
    let minCount = 3;
  });
  $(".blog__post__form_website").on("input", function() {
    let count = $(".blog__post__form_website").val().length;
    console.log(count);
    let minCount = 3;
    // if (count < minCount) {
    //     $("..blog__post__form_name").remmoveClass("help").addClass("show");
    // }
  });
  // создаем функцию для обработки события submit

  let btn = $(".form__btn");
  let jQuery = btn.on(`click`, function() {
    let nameLength = $(".blog__post__form_name").val().length;
    if (nameLength > 3) {
      console.log("Поле валидно");
    } else {
      console.log("Имя слишком короткое");
    }
    let nameWebsite = $(".blog__post__form_website").val().length;
    if (nameWebsite > 3) {
      console.log("Поле валидно");
    } else {
      console.log("Имя Website слишком короткое");
    }
    let nameMessage = $(".blog__post__form_message").val().length.trim;
    if (nameMessage > 10) {
      console.log("Поле валидно");
    } else {
      console.log("Пожалуйста, раскройте шире Ваш вопрос");
    }
    // короткая запись if и else
    let isName = $(".blog__post__form_name").val.trim();
    {
      isName
        ? console.log("все хорошо")
        : console.log("поле не может быть пустым");
    }
  });

  // создаем функцию для обработки события submit
  $(".blog__post__form").on("submit", function(e) {
    e.preventDefault();
  });

  // переключени темы
  let body = $("body");
  let switchBtn = $(".switch-btn");
  if (localStorage.getItem("theme") === "dark") {
    body.addClass("dark");
    switchBtn.addClass("switch-on");
  }
  switchBtn.on("click", function() {
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

  // фильтр
  let button = $(".filter__nav");
  button.on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    let cards = $(".home__page__filter__work");
    cards.removeClass("active");
    let btnText = $(this)
      .text()
      .toLowerCase();
    let final = cards.filter(function() {
      if (btnText === "all") {
        return cards;
      } else {
        return $(this).data("category") === btnText;
      }
    });
    final.each(function() {
      $(this).addClass("active");
    });
  });
// переход по ссылке
  let portfolioBtn = $(".home__page__filter__work");
  portfolioBtn.on("click", function () {
    console.log(333)
    window.open('./portfolio details.html');
  });

  

 

 
});
