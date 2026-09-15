const swiper = new Swiper(".swiper", {
  width: 240,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const mediaQuery = window.matchMedia("(max-width: 767px)");

mediaQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    swiper.slideTo(0, 0);
  }
});

let isOpen768 = false;
let isOpen1120 = false;

const slide1 = document.querySelector("#swiper-slide-1");
const slide2 = document.querySelector("#swiper-slide-2");
const slide3 = document.querySelector("#swiper-slide-3");
const slide4 = document.querySelector("#swiper-slide-4");
const slide5 = document.querySelector("#swiper-slide-5");
const slide6 = document.querySelector("#swiper-slide-6");
const slide7 = document.querySelector("#swiper-slide-7");
const slide8 = document.querySelector("#swiper-slide-8");
const slide9 = document.querySelector("#swiper-slide-9");
const slide10 = document.querySelector("#swiper-slide-10");
const slide11 = document.querySelector("#swiper-slide-11");

function checkScreenWidth() {
  if (window.innerWidth <= 1119 && !isOpen768) {
    slide1.classList.remove("swiper-slide-hidden");
    slide2.classList.remove("swiper-slide-hidden");
    slide3.classList.remove("swiper-slide-hidden");
    slide4.classList.remove("swiper-slide-hidden");
    slide5.classList.remove("swiper-slide-hidden");
    slide6.classList.remove("swiper-slide-hidden");

    slide7.classList.add("swiper-slide-hidden");
    slide8.classList.add("swiper-slide-hidden");
    slide9.classList.add("swiper-slide-hidden");
    slide10.classList.add("swiper-slide-hidden");
    slide11.classList.add("swiper-slide-hidden");

    isOpen768 = true;
    isOpen1120 = false;
  } else if (window.innerWidth >= 1120 && !isOpen1120) {
    slide1.classList.remove("swiper-slide-hidden");
    slide2.classList.remove("swiper-slide-hidden");
    slide3.classList.remove("swiper-slide-hidden");
    slide4.classList.remove("swiper-slide-hidden");
    slide5.classList.remove("swiper-slide-hidden");
    slide6.classList.remove("swiper-slide-hidden");
    slide7.classList.remove("swiper-slide-hidden");
    slide8.classList.remove("swiper-slide-hidden");

    slide9.classList.add("swiper-slide-hidden");
    slide10.classList.add("swiper-slide-hidden");
    slide11.classList.add("swiper-slide-hidden");

    isOpen1120 = true;
    isOpen768 = false;
  }
}

window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();

function showMore() {
  if (window.innerWidth <= 1119) {
    slide1.classList.remove("swiper-slide-hidden");
    slide2.classList.remove("swiper-slide-hidden");
    slide3.classList.remove("swiper-slide-hidden");
    slide4.classList.remove("swiper-slide-hidden");
    slide5.classList.remove("swiper-slide-hidden");
    slide6.classList.remove("swiper-slide-hidden");

    slide7.classList.toggle("swiper-slide-hidden");
    slide8.classList.toggle("swiper-slide-hidden");
    slide9.classList.toggle("swiper-slide-hidden");
    slide10.classList.toggle("swiper-slide-hidden");
    slide11.classList.toggle("swiper-slide-hidden");

    if (!slide7.classList.contains("swiper-slide-hidden")) {
      isOpen768 = true;
    }
  } else if (window.innerWidth >= 1120) {
    slide1.classList.remove("swiper-slide-hidden");
    slide2.classList.remove("swiper-slide-hidden");
    slide3.classList.remove("swiper-slide-hidden");
    slide4.classList.remove("swiper-slide-hidden");
    slide5.classList.remove("swiper-slide-hidden");
    slide6.classList.remove("swiper-slide-hidden");
    slide7.classList.remove("swiper-slide-hidden");
    slide8.classList.remove("swiper-slide-hidden");

    slide9.classList.toggle("swiper-slide-hidden");
    slide10.classList.toggle("swiper-slide-hidden");
    slide11.classList.toggle("swiper-slide-hidden");

    if (!slide9.classList.contains("swiper-slide-hidden")) {
      isOpen1120 = true;
    }
  }
}



// цель сделать так что когда меняется ширина экрана, скрытие открытых елементов
// срабатывает только один раз
// if (window.innerWidth <= 1119 && slide7.className==="swiper-slide-hidden")
// else if (window.innerWidth >= 1120 && slide11.className==="swiper-slide-hidden")
