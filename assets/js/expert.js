const hamburger =
  document.getElementById("hamburger");
const navMenu =
  document.getElementById("nav-menu");
const basicLevel =
  document.getElementById("basic");
const intermediateLevel =
  document.getElementById("intermediate");
const expertLevel =
  document.getElementById("expert");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document
  .querySelectorAll("nav ul li a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });