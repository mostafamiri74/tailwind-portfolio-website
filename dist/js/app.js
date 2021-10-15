const nav = document.getElementById("nav");
const logoImg = document.querySelector(".logo-img");

window.addEventListener("scroll", navControl);

function navControl(e) {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll && scroll >= 100) {
    nav.classList.add("nav-scrolled");
    logoImg.src = "img/logo-dark.png";
    console.log(logoImg.src);
    // for (let l of link) {
    //   l.classList.add("nav-scrolled__link");
    // }
  } else {
    nav.classList.remove("nav-scrolled");
    logoImg.src = "img/logo-light.png";
    // for (let l of link) {
    //   l.classList.remove("nav-scroll__link");
    // }
  }
}

navControl();

// corousel

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 300,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });
const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var map = L.map("map").setView([35.730428, 51.3383063], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map).openPopup();
