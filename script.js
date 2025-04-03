// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Mendapatkan elemen canvas
// Mendapatkan elemen canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Fungsi untuk menggambar garis menggunakan algoritma DDA
function garisDDA(X0, Y0, X1, Y1) {
    var dx = Math.abs(X1 - X0);
    var dy = Math.abs(Y1 - Y0);
    var step;

    // Menentukan jumlah langkah
    if (dx > dy) {
        step = dx;
    } else {
        step = dy;
    }

    // Menghitung inkremen
    var Xinc = dx / step;
    var Yinc = dy / step;

    // Titik awal
    var X = X0;
    var Y = Y0;

    // Menggambar titik
    for (var i = 0; i <= step; i++) {
        ctx.fillStyle = 'black'; // Warna titik
        ctx.fillRect(Math.round(X), Math.round(Y), 1, 1); // Menggambar titik
        X += Xinc; // Mengupdate X
        Y += Yinc; // Mengupdate Y
    }
}

// Menggambar garis dari (50, 50) ke (300, 150)
garisDDA(50, 50, 300, 150);

document.addEventListener("DOMContentLoaded", function() {
  function AlgoritmaBresenham(x0, y0, r) {
      const canvas = document.getElementById('CanvasLingkaran');
      const ctx = canvas.getContext('2d');

      let x = 0;
      let y = r;
      let d = 3 - 2 * r;

      function drawPoints(x, y) {
          ctx.fillRect(x0 + x, y0 + y, 2, 2);
          ctx.fillRect(x0 - x, y0 + y, 2, 2);
          ctx.fillRect(x0 + x, y0 - y, 2, 2);
          ctx.fillRect(x0 - x, y0 - y, 2, 2);
          ctx.fillRect(x0 + y, y0 + x, 2, 2);
          ctx.fillRect(x0 - y, y0 + x, 2, 2);
          ctx.fillRect(x0 + y, y0 - x, 2, 2);
          ctx.fillRect(x0 - y, y0 - x, 2, 2);
      }

      drawPoints(x, y);

      while (y >= x) {
          x++;

          if (d < 0) {
              d = d + 4 * x + 6;
          } else {
              y--;
              d = d + 4 * (x - y) + 10;
          }

          drawPoints(x, y);
      }
  }

  // Panggil fungsi untuk menggambar lingkaran setelah halaman dimuat
  const x0 = 200, y0 = 50;
  const r = 70;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 70;
  AlgoritmaBresenham(centerX, centerY, radius);
});
