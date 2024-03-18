let checking = document.querySelectorAll(".icon-checking");
let params = document.querySelectorAll(".plan__params");
let checked = "";
function paramFunc() {
  params.forEach((el, i) => {
    if (checked == i) {
      el.classList.toggle("opacity");
    }
  });
}
checking.forEach((e, i) => {
  e.addEventListener("click", () => {
    checked = i;
    e.classList.toggle("icon-checking");
    e.classList.toggle("icon-censel");
    paramFunc();
  });
});
let quest = document.querySelectorAll(".quest");
let questAns = "";
let icon = document.querySelectorAll(".icon");
let answer = document.querySelectorAll(".answer");
function answerFunc() {
  answer.forEach((el, indx) => {
    if (questAns == indx) {
      el.classList.toggle("hidden");
    }
  });
  icon.forEach((e, indx) => {
    if (questAns == indx) {
      e.classList.toggle("icon-plus");
      e.classList.toggle("icon-minus");
    }
  });
}

quest.forEach((e, i) => {
  e.addEventListener("click", () => {
    questAns = i;
    answerFunc();
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  lazy: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    888: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1124: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var appendNumber = 7;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document.querySelector(".append-slide").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.appendSlide(
    '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  );
});
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });
