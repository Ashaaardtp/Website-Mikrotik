const hamburger =
  document.getElementById("hamburger");
const navMenu =
  document.getElementById("nav-menu");
const tombolGuru =
  document.getElementById("buat-guru");
const pesanUntukGuru = document.getElementById(
  "pesan-buat-guru",
);
const btnBelajar =
  document.getElementById("belajar");
let belajar = null;

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

let currentPopup = null;
function showPopup(htmlContent) {
  if (currentPopup) {
    closePopup();
  }

  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  const box = document.createElement("div");
  box.className = "popup-box";
  box.innerHTML = htmlContent;

  overlay.appendChild(box);
  document.body.appendChild(overlay);
  overlay.offsetHeight;

  overlay.classList.add("show");
  currentPopup = overlay;

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      closePopup();
    }
  });

  return overlay;
}

function closePopup() {
  if (!currentPopup) return;

  const overlay = currentPopup;
  overlay.classList.remove("show");
  setTimeout(() => {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
    if (currentPopup === overlay)
      currentPopup = null;
  }, 300);
}

function bukaPopupGuru() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  const konten = `<span class="popup-close" id="closePopup">&times;</span>
  <h3>🔐 Masukkan Kode Guru</h3>
  <input type="text" id="kodeGuruInput" placeholder="Kode rahasia" autofocus>
  <div class="popup-actions">
    <button class="btn-kirim" id="submitKode">Kirim</button>
    <button class="btn-batal" id="batalPopup">Batal</button>
  </div>`;

  showPopup(konten);

  const closeBtn =
    document.getElementById("closePopup");
  const submitBtn =
    document.getElementById("submitKode");
  const batalBtn =
    document.getElementById("batalPopup");
  const inputKode = document.getElementById(
    "kodeGuruInput",
  );

  closeBtn.addEventListener("click", closePopup);
  batalBtn.addEventListener("click", closePopup);

  submitBtn.addEventListener(
    "click",
    function () {
      const kode = inputKode.value;
      const KODE_BENAR = "Kami Bos Terakhir";

      if (kode === KODE_BENAR) {
        pesanUntukGuru.style.display = "block";

        const box =
          currentPopup.querySelector(
            ".popup-box",
          );
        box.innerHTML = `
        <span class="popup-close" id="closePopup">&times;</span>
        <h3>🎉 Selamat Datang, Guru!</h3>
        <p>Anda telah berhasil masuk.</p>
        <div class="popup-actions">
          <button class="btn-kirim" id="tutupPopup">Tutup</button>
        </div>
      `;

        document
          .getElementById("closePopup")
          .addEventListener("click", closePopup);
        document
          .getElementById("tutupPopup")
          .addEventListener("click", closePopup);
      } else {
        kodeInputGuru.style;
        inputKode.value = "";
        inputKode.focus();
      }
    },
  );
}

tombolGuru.addEventListener(
  "click",
  bukaPopupGuru,
);

btnBelajar.addEventListener("click", function () {
  belajar = true;
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  const selamatBelajar =
    document.createElement("div");
  selamatBelajar.className = "popup-box";
  selamatBelajar.innerHTML = `
  <span class="popup-close" id="closePopup">&times;</span>
  <h3>Kamu akan diarahkan ke halaman belajar</h3>
  <p>Have Fun!!</p>
  <div class="popup-actions">
    <button class="btn-kirim" id="tutupPopup">Nanti Dulu</button>
    <button class="btn-kirim" id="pindahHalaman">Gas</button>
  </div>
`;

  overlay.appendChild(selamatBelajar);
  document.body.appendChild(overlay);

  overlay.offsetHeight;
  overlay.classList.add("show");

  const closeBtn =
    document.getElementById("closePopup");
  if (closeBtn) {
    closeBtn.addEventListener(
      "click",
      function () {
        closePopup(overlay);
      },
    );
  }

  const tutupBtn =
    document.getElementById("tutupPopup");
  if (tutupBtn) {
    tutupBtn.addEventListener(
      "click",
      function () {
        closePopup(overlay);
      },
    );
  }

  const pindahHalaman = document.getElementById(
    "pindahHalaman",
  );
  if (pindahHalaman) {
    pindahHalaman.addEventListener(
      "click",
      function () {
        closePopup(overlay);
        window.location.href =
          "halaman-awal.html";
      },
    );
  }

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      closePopup(overlay);
    }
  });

  function closePopup(overlay) {
    overlay.classList.remove("show");

    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 300);
  }
});
