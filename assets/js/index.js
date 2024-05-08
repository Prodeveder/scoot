const headerContent = document.querySelectorAll(".header__container");
const headerContentWrapper = document.querySelectorAll(
  ".header__content__wrapper"
);

const clearHeader = () => {
  headerContent.forEach((Element) => {
    Element.style.display = "none";
  });
  headerContentWrapper.forEach((Element) => {
    Element.classList.remove("active");
  });
};

headerContent[0].style.display = "block";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let headerIndex = 0;

const runSlider = () => {
  setInterval(nextSlide, 5000);
};

const nextSlide = () => {
  clearHeader();
  clearInterval();
  if (headerIndex > 1) {
    headerIndex = 0;
  } else {
    headerIndex += 1;
  }
  headerContent[headerIndex].style.display = "block";
  headerContentWrapper[headerIndex].classList.add("active");
};

const prevSlide = () => {
  clearHeader();
  clearInterval();
  if (headerIndex == 0) {
    headerIndex = 2;
  } else {
    headerIndex -= 1;
  }
  headerContent[headerIndex].style.display = "block";
  headerContentWrapper[headerIndex].classList.add("active");
};

runSlider();

const menu = document.querySelector(".menu");

const closeMenu = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile__navbar__wrapper");
menu.addEventListener("click", () => {
  if (mobileMenu.style.display == "") {
    mobileMenu.style.display = "flex";
  } else if (mobileMenu.style.display == "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
