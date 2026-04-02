const judulHeading = [
  "Blokir Website Menggunakan DNS Static",
  "Blokir File Menggunakan Web Proxy",
];
const containerHeading =
  document.querySelectorAll(".submodul");

const hamburger =
  document.getElementById("hamburger");
const navMenu =
  document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

containerHeading.forEach((div, index) => {
  if (judulHeading[index]) {
    const heading = document.createElement("h2");

    heading.textContent = `${index + 1}. ${judulHeading[index]}`;

    div.prepend(heading);
  }
});

document
  .querySelectorAll("nav ul li a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger)
        hamburger.classList.remove("active");
      if (navMenu)
        navMenu.classList.remove("active");
    });
  });

document.addEventListener("click", (event) => {
  if (event.target.id !== "btn-dropdown") return;

  const button = event.target;
  const dropdownContent =
    button.nextElementSibling;

  if (
    dropdownContent &&
    dropdownContent.classList.contains(
      "dropdown-content",
    )
  ) {
    dropdownContent.classList.toggle("active");
    button.textContent =
      (
        dropdownContent.classList.contains(
          "active",
        )
      ) ?
        "Tutup Sub-Modul"
      : "Buka Sub-Modul";
  }
});
