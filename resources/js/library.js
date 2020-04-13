document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#home").children[0].classList.remove("test");
  document.querySelector("#about").children[0].classList.remove("test");
  document.querySelector("#library").children[0].classList.add("test");
});
