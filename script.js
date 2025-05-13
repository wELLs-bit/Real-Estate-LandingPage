document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const closeBtn = document.getElementById("close-btn");
  const nav = document.getElementById("nav-menu");

  burger.addEventListener("click", function () {
    nav.classList.add("nav-active");
  });

  closeBtn.addEventListener("click", function () {
    nav.classList.remove("nav-active");
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      nav.classList.remove("nav-active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".card-wrapper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 50 },
    },
    on: {
      slideChangeTransitionEnd: function () {
        document.querySelectorAll(".swiper-slide").forEach((slide) => {
          slide.classList.remove("active-slide");
        });

        const activeSlide = this.slides[this.activeIndex];
        activeSlide.classList.add("active-slide");
      },
    },
  });
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const menuToggle = document.querySelector(".menuopen");
const navMenu = document.querySelector("#nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// let lastScrollTop = 0;
// const header = document.querySelector(".header");

// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.getElementById("burger");
//   const closeBtn = document.getElementById("close-btn");
//   const nav = document.getElementById("nav-menu");

//   burger.addEventListener("click", function () {
//     nav.classList.add("nav-active");
//   });

//   closeBtn.addEventListener("click", function () {
//     nav.classList.remove("nav-active");
//   });

//   document.addEventListener("click", function (event) {
//     if (!nav.contains(event.target) && !burger.contains(event.target)) {
//       nav.classList.remove("nav-active");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // steps-services section
  // ScrollReveal().reveal(".service-section div", {
  //   origin: "bottom",
  //   distance: "40px",
  //   duration: 800,
  //   delay: 400,
  //   easing: "ease-in-out",
  //   interval: 200, // Staggers animation for each box
  //   reset: true,
  // });
  //   ScrollReveal().reveal(".subfooter-content div", {
  //     origin: "bottom",
  //     distance: "40px",
  //     duration: 800,
  //     delay: 400,
  //     easing: "ease-in-out",
  //     interval: 200, // Staggers animation for each box
  //     reset: true,
  //   });
  // ScrollReveal().reveal(".agent-card div", {
  //   origin: "left",
  //   distance: "40px",
  //   duration: 800,
  //   delay: 400,
  //   easing: "ease-in-out",
  //   interval: 200, // Staggers animation for each box
  //   reset: true,
  // });
  // ScrollReveal().reveal(".contact-contents div", {
  //   origin: "left",
  //   distance: "40px",
  //   duration: 800,
  //   delay: 400,
  //   easing: "ease-in-out",
  //   interval: 200, // Staggers animation for each box
  //   reset: true,
  // });
});
