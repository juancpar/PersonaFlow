const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#mobile-menu");

const radioBtn1 = document.querySelector("#rdio-one");
const radioBtn2 = document.querySelector("#rdio-two");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("is-active");
});

radioBtn1.addEventListener("click", function () {
  radioBtn1.classList.toggle("active");

  if (radioBtn1.classList.contains("active")) {
    radioBtn2.classList.remove("active");
  }
});

radioBtn2.addEventListener("click", function () {
  radioBtn2.classList.toggle("active");

  if (radioBtn2.classList.contains("active")) {
    radioBtn1.classList.remove("active");
  }
});
