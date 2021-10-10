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
