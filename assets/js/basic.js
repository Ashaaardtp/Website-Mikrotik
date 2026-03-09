const judulHeading = [
  "Topologi yang digunakan",
  "Ganti nama Router Mikrotik",
  "Ganti nama port ethernet di Mikrotik",
  "Buat IP Address sesuai dengan yang diminta",
  "Meminta IP ISP ke DHCP Client",
  "Membuat DHCP Server untuk memberikan IP pada client",
  "Setting NAT agar Mikrotik memiliki akses internet",
];
const containerHeading =
  document.querySelectorAll(".submodul");

const hamburger =
  document.getElementById("hamburger");
const navMenu =
  document.getElementById("nav-menu");
const btnModul = document.getElementById(
  "modul-button",
);
const btnIntermediate = document.getElementById(
  "goToIntermediate",
);

btnIntermediate.addEventListener(
  "click",
  function () {
    window.location.href = "intermediate.html";
  },
);

containerHeading.forEach((div, index) => {
  if (judulHeading[index]) {
    const heading = document.createElement("h2");

    heading.textContent = `${index + 1}. ${judulHeading[index]}`;

    div.prepend(heading);
  }
});

btnModul.addEventListener("click", function () {
  // Close navbar if it's active
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  const overlay = document.createElement("div");
  const popupModul =
    document.createElement("div");
  const popupLink = `<ol class="daftar-modul">
    <h3>Basic</h3>
    <li><a href="#satu">Topologi yang digunakan</a></li> 
    <li><a href="#dua">Ganti nama Router Mikrotik</a></li>
    <li><a href="#tiga">Ganti nama port ethernet di Mikrotik</a></li>
    <li><a href="#empat">Buat IP Address sesuai dengan yang diminta</a></li>
    <li><a href="#lima">Meminta IP ISP ke DHCP Client</a></li>
    <li><a href="#enam">Membuat DHCP Server untuk memberikan IP pada client</a></li> 
    <li><a href="#tujuh">Setting NAT agar Mikrotik memiliki akses internet</a></li>
    </ol>
    <button id="tutupPopup" class="buttons">Tutup</button>`;
  overlay.className = "popup-overlay";
  popupModul.className = "popupModul";
  popupModul.innerHTML = popupLink;
  overlay.appendChild(popupModul);
  document.body.appendChild(overlay);
  overlay.offsetHeight;
  overlay.classList.add("show");

  const tutupBtn =
    document.getElementById("tutupPopup");
  if (tutupBtn) {
    tutupBtn.addEventListener(
      "click",
      function () {
        overlay.classList.remove("show");
      },
    );
  }

  // Close popup when clicking on overlay background
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });

  document
    .querySelectorAll("ol li a")
    .forEach((link) => {
      link.addEventListener("click", (e) => {
        // Get the target section ID from href (e.g., #satu -> satu)
        const targetId = e.target
          .getAttribute("href")
          .substring(1);

        // Find the target section
        const targetSection =
          document.getElementById(targetId);

        if (targetSection) {
          // Find the dropdown button and content within this section
          const dropdownBtn =
            targetSection.querySelector(
              ".buttons",
            );
          const dropdownContent =
            targetSection.querySelector(
              ".dropdown-content",
            );

          if (dropdownBtn && dropdownContent) {
            // Add active class to show the dropdown
            dropdownContent.classList.add(
              "active",
            );
            // Change button text to "Tutup Sub-Modul"
            dropdownBtn.textContent =
              "Tutup Sub-Modul";
          }

          // Smooth scroll to target section
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Close the popup overlay
        overlay.classList.remove("show");
      });
    });
});

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

document.addEventListener(
  "click",
  function (event) {
    if (event.target.id === "btn-dropdown") {
      const button = event.target;
      const dropdownContent =
        button.nextElementSibling;

      if (
        dropdownContent &&
        dropdownContent.classList.contains(
          "dropdown-content",
        )
      ) {
        dropdownContent.classList.toggle(
          "active",
        );
        button.textContent =
          (
            dropdownContent.classList.contains(
              "active",
            )
          ) ?
            "Tutup Sub-Modul"
          : "Buka Sub-Modul";
      }
    }
  },
);

const mz = mediumZoom(".zoom", {
  margin: 20,
  background: "rgba(0,0,0,0)",
  scrollOffset: 9999,
});

const mzOverlay = document.createElement("div");
mzOverlay.className = "mz-overlay";
document.body.appendChild(mzOverlay);

const closeButton =
  document.createElement("button");
closeButton.className = "mz-close-btn";
closeButton.innerHTML = "✕";
closeButton.title = "Tutup (Esc)";
document.body.appendChild(closeButton);

mz.on("open", () => {
  mzOverlay.classList.add("show");
  closeButton.classList.add("show");
  document.body.style.overflow = "hidden";
  const opened = document.querySelector(
    ".medium-zoom-image--opened",
  );
  if (opened) {
    opened.style.zIndex = 2001;
  }
});

mz.on("close", () => {
  mzOverlay.classList.remove("show");
  closeButton.classList.remove("show");
  document.body.style.overflow = "";
  const opened = document.querySelector(
    ".medium-zoom-image--opened",
  );
  if (opened) {
    opened.style.zIndex = "";
  }
});

closeButton.addEventListener("click", () =>
  mz.close(),
);

mzOverlay.addEventListener("click", () =>
  mz.close(),
);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    closeButton.classList.contains("show")
  ) {
    mz.close();
  }
});
