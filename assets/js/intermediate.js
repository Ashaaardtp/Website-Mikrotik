const judulHeading = [
  "Membuat Wi-Fi",
  "Blokir ping ke router",
  "Blokir ping ke wireless",
  "Penjadwalan internet",
  "Logging",
];
const containerHeading =
  document.querySelectorAll(".submodul");
const btnModul = document.getElementById(
  "modul-button",
);

const hamburger =
  document.getElementById("hamburger");
const navMenu =
  document.getElementById("nav-menu");
const basicLevel = hamburger.addEventListener(
  "click",
  () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  },
);

document
  .querySelectorAll("nav ul li a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

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
      <h3>Intermediate</h3>
      <li><a href="#satu">Membuat Wi-Fi</a></li> 
      <li><a href="#dua">Blokir ping ke router</a></li>
      <li><a href="#tiga">Blokir ping ke wireless</a></li>
      <li><a href="#empat">Penjadwalan internet</a></li>
      <li><a href="#lima">Logging</a></li>
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

// Initialize ViewerJS for image viewing
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Find all images with zoom class and wrap them in a container
    const zoomImages =
      document.querySelectorAll(".zoom");

    if (zoomImages.length > 0) {
      // Create a container to hold all images for gallery view
      const galleryContainer =
        document.createElement("div");
      galleryContainer.id = "image-gallery";
      galleryContainer.style.display = "none"; // Hidden container for ViewerJS

      // Clone all zoom images to the container
      zoomImages.forEach(function (img, index) {
        const clonedImg = img.cloneNode(true);
        clonedImg.removeAttribute("onclick");
        galleryContainer.appendChild(clonedImg);
      });

      document.body.appendChild(galleryContainer);

      // Initialize Viewer on the container
      const gallery = new Viewer(
        galleryContainer,
        {
          inline: false,
          button: true,
          navbar: false,
          title: false,
          toolbar: {
            zoomIn: true,
            zoomOut: true,
          },
          tooltip: true,
          movable: true,
          zoomable: true,
          rotatable: false,
          scalable: false,
          transition: true,
          fullscreen: false,
          keyboard: true,
          loading: true,
          loop: false,
          minZoomRatio: 0.5,
          maxZoomRatio: 4,
          zIndex: 9999,
          zIndexInline: 9999,
          // When clicking original image, open the viewer
          url: function (imageElement) {
            return imageElement.src;
          },
        },
      );

      // Add click event to original images to open gallery
      zoomImages.forEach(function (img, index) {
        img.style.cursor = "pointer";
        img.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            // Show the corresponding image in the gallery
            gallery.view(index);
          },
        );
      });
    }
  },
);
