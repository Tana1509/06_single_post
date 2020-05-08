jQuery(document).ready(function($) {
  //burger
  let menuBtn = $(".header__burger");
  console.log(menuBtn);
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
  // радиокнопка через див

  $(".switch-btn").click(function() {
    $(this).toggleClass("switch-on");
    if ($(this).hasClass("switch-on")) {
      $(this).trigger("on.switch");
    } else {
      $(this).trigger("off.switch");
    }
  });

  $(".switch-btn").on("click", function() {
    if ($(this).hasClass("switch-on")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
  'use strict';
  let head = document.head;
    let dark = $('dark');
  //   link = document.createElement("link");
  // link.rel = "stylesheet";
  if (localStorage.getItem("theme") === "dark") {
    $(this).toggleClass("dark");
  }

  // переключение темы для чекбокса

  //   // 'use strict';
  //   // // создал <link rel="stylesheet" href="light-theme|dark-theme.css">
  // let head = document.head,
  //   link = document.createElement('link');
  // link.rel = 'stylesheet';
  //   // // Проверка значения. Если dark-theme то будет темная тема
  // if (localStorage.getItem('theme') === 'dark') {
  //   link.href = '../scss/dark_theme.scss'; // ссылка на темную тему
  //   document.getElementById('switch-dark').attr('checked', true); // переключаем чекбокс в положение "темная тема"
  // }

  // else {
  //   link.href = '/assets/css/white-theme.css'; // ссылка на светлую тему
  // }
  // head.appendChild(link); // вставляем <link rel="stylesheet" href="light-theme|/assets/css/dark-theme.css">

  // // событие при переключении чекбокса
  // document.getElementById('switch-dark').addEventListener('change', ev => {
  //   let btn = ev.target;
  //   // если чекбокс включен
  //   if (btn.checked) {
  //     link.href = '/assets/css/dark-theme.css'; // включаем темную тему
  //     localStorage.setItem('themeStyle', 'dark'); // записываем значение в localStorage
  //   }
  //   else {
  //     link.href = '/assets/css/white-theme.css'; // включаем светлую тему
  //     localStorage.setItem('themeStyle', 'light'); // записываем значение в localStorage
  //   }
  // });

  //home page slider

  $(".heading__slaider").owlCarousel({
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

  let owl = $(".owl-carousel");
  owl.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".owl-nav_arrow_next").click(function() {
    owl.trigger("next.owl.carousel");
  });
  $(".owl-nav_arrow_prev").click(function() {
    owl.trigger("prev.owl.carousel");
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
  btn.on(`click`, function() {
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
    let isName = $(".blog__post__form_name").val.trim;
    {
      isName
        ? console.log("все хорошо")
        : console.log("поле не может быть пустым");
    }
    ////////////////
  });

  // создаем функцию для обработки события submit
  $(".blog__post__form").on("submit", function(e) {
    e.preventDefault();
  });
});
// $('.blog__post__form').submit(function (e) {
//     e.preventDefault();
//     let name = $('.blog__post__form_name').val();
//     let website = $('.blog__post__form_website').val();
//     let email = $('.blog__post__form_email').val();
//     let message = $('.blog__post__form_message').val();

//     $(".error").remove();

//     if (name.length < 3) {
//         $('.blog__post__form_name').after('<span class="error">This field is required</span>');
//     }
//     if (website.length < 1) {
//         $('.blog__post__form_website').after('<span class="error">This field is required</span>');
//     }
//     if (email.length < 3) {
//         $('.blog__post__form_email').after('<span class="error">This field is required</span>');
//     } else {
//         var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
//         var validEmail = regEx.test(email);
//         if (!validEmail) {
//             $('.blog__post__form_email').after('<span class="error">Enter a valid email</span>');
//         }
//     }
//     if (message.length < 8) {
//         $('.blog__post__form_website').after('<span class="error">Password must be atleast 8 characterslong</span>');
//     }
//   });
// });