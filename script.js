const menu = document.querySelector(".menu"),
  close = document.querySelector(".close"),
  mobileNav = document.querySelector(".mobile__nav__wrapper");

menu.addEventListener("click", () => {
  mobileNav.style.display = "block";
});

close.addEventListener("click", () => {
  mobileNav.style.display = "none";
});
