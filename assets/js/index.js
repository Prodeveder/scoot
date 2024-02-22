// The Header Controls
const headerControls = document.querySelectorAll(".header__control");
let interval = 2;

const removeActiveControl = () => {
  headerControls.forEach((element) => {
    element.classList.remove("hc__active");
  });
};

headerControls.forEach((headerControl) => {
  headerControl.addEventListener("click", () => {
    removeActiveControl();
    headerControl.classList.add("hc__active");
    interval = headerControl.id - 1;
    waitFunc();
    setTimeout(() => {
      clearInterval(headerTimer);
      headerTimer = setInterval(waitFunc, 3000);
    }, 1000);
  });
});

const headers = document.querySelectorAll(".header");

function waitFunc() {
  if (interval > 2) {
    interval = 0;
  }
  headers.forEach((header) => {
    header.style.display = "none";
  });

  headers[interval].style.display = "block";
  removeActiveControl();
  headerControls[interval].classList.add("hc__active");

  interval++;
}

let headerTimer = setInterval(waitFunc, 3000);
