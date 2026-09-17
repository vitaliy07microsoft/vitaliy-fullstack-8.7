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

// const slide1 = document.querySelector("#swiper-slide-1");
// const slide2 = document.querySelector("#swiper-slide-2");
// const slide3 = document.querySelector("#swiper-slide-3");
// const slide4 = document.querySelector("#swiper-slide-4");
// const slide5 = document.querySelector("#swiper-slide-5");
// const slide6 = document.querySelector("#swiper-slide-6");
// const slide7 = document.querySelector("#swiper-slide-7");
// const slide8 = document.querySelector("#swiper-slide-8");
// const slide9 = document.querySelector("#swiper-slide-9");
// const slide10 = document.querySelector("#swiper-slide-10");
const slide11 = document.querySelector("#swiper-slide-11");
const allSlides = document.querySelectorAll(".swiper-slide");
const tabletOpenSlides = Array.from(allSlides).slice(0, 6);
const tabletCloseSlides = Array.from(allSlides).slice(6, 11);
const pcOpenSlides = Array.from(allSlides).slice(0, 8);
const pcCloseSlides = Array.from(allSlides).slice(8, 11);
const bottomButtonText = document.querySelector(".bottom__button--text")

function checkScreenWidth() {
   if (window.innerWidth <= 767) {
    isOpen768 = false;
    isOpen1120 = false;
  }

  if (window.innerWidth <= 1119 && !isOpen768) {
    tabletOpenSlides.forEach((slide) => {
      slide.classList.remove("swiper-slide-hidden");
    });

    tabletCloseSlides.forEach((slide) => {
      slide.classList.add("swiper-slide-hidden");
    });

    isOpen768 = true;
    isOpen1120 = false;

  } else if (window.innerWidth >= 1120 && !isOpen1120) {
    pcOpenSlides.forEach((slide) => {
      slide.classList.remove("swiper-slide-hidden");
    });

    pcCloseSlides.forEach((slide) => {
      slide.classList.add("swiper-slide-hidden");
    });

    isOpen1120 = true;
    isOpen768 = false;
  }

  buttonTextChange();
}

window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();

function showMore() {
  if (window.innerWidth <= 1119) {
    tabletOpenSlides.forEach((slide) => {
      slide.classList.remove("swiper-slide-hidden");
    });

    tabletCloseSlides.forEach((slide) => {
      slide.classList.toggle("swiper-slide-hidden");
    });

    if (!slide11.classList.contains("swiper-slide-hidden")) {
      isOpen768 = true;
    }
  } else if (window.innerWidth >= 1120) {
    pcOpenSlides.forEach((slide) => {
      slide.classList.remove("swiper-slide-hidden");
    });

    pcCloseSlides.forEach((slide) => {
      slide.classList.toggle("swiper-slide-hidden");
    });

    if (!slide11.classList.contains("swiper-slide-hidden")) {
      isOpen1120 = true;
    }
  }

  buttonTextChange();
}

function buttonTextChange() {
  if ( slide11.classList.contains("swiper-slide-hidden")){
    bottomButtonText.textContent = "Показать всё";
  } else {
    bottomButtonText.textContent = "Скрыть";
  }
}