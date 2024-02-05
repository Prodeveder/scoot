const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelectorAll(".close__img");
const menu = document.querySelector(".menu__container");

const MainNav = document.querySelector(".nav__main");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  MainNav.style.justifyContent = "flex-end";
});

closeMenu[1].addEventListener("click", () => {
  menu.style.display = "none";
  MainNav.style.justifyContent = "center";
});

// The FAQ Question

const faqOPen = document.querySelectorAll(".open__FAQ__answer");
const faqClose = document.querySelectorAll(".close__FAQ__answer");
const faqAnswers = document.querySelectorAll(".faq__answer");
const faqQuestion = document.querySelectorAll(".faq__question");

// faqOPen[0].style.display = "none";
// faqClose[0].style.display = "block";

faqQuestion.forEach((element) => {
  element.addEventListener("click", () => {
    let index = element.classList[1] - 1;
    if (faqAnswers[index].style.display == "none") {
      faqAnswers[index].style.display = "block";
      faqOPen[index].style.display = "none";
      faqClose[index].style.display = "block";
    } else {
      faqAnswers[index].style.display = "none";
      faqOPen[index].style.display = "block";
      faqClose[index].style.display = "none";
    }
  });
});

// The Contact Lightbox
const closeLightBox = document.querySelector(".close__lightbox");
const openLightBox = document.querySelectorAll(".openLightBox");
const lightBox = document.querySelector(".light__box");

closeLightBox.addEventListener("click", () => {
  lightBox.style.display = "none";
});

openLightBox.forEach((element) => {
  element.addEventListener("click", () => {
    lightBox.style.display = "flex";
    menu.style.display = "none";
  });
});
