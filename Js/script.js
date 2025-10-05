document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    rewind: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    height: "100vh",
    arrows: true,
    pagination: false,
  }).mount();
});

//....................header...............//
let header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  // console.log(currentScroll);
  if (currentScroll > lastScroll) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});
//.................header nav-active...............//
let navTexts = document.querySelectorAll(".header-three-grid nav li a");
let firstNav = document.querySelector(".first-nav-active");
// console.log(navText);
navTexts.forEach((text) => {
  text.addEventListener("click", () => {
    navTexts.forEach((item) => {
      item.classList.remove("nav-active");
      item.classList.remove("first-nav-active");
    });
    text.classList.add("nav-active");
    setTimeout(() => {
      text.classList.remove("nav-active");
      firstNav.classList.add("first-nav-active");
    }, 5000);
  });
});

//....................offcanvas toggle.......................//

let hamburger = document.querySelector(".hamburger");
let offcanvas = document.querySelector(".offcanvas");
let body = document.querySelector("body");
let mobNavItems = document.querySelectorAll(".offcanvas-box li a");
// console.log(mobNavItems);
let menuToggle = document.getElementById("menu-toggle");

hamburger.addEventListener("click", () => {
  offcanvas.classList.toggle("height-show");
  if (offcanvas.classList.contains("height-show")) {
    setTimeout(() => {
      body.classList.remove("offcanvas-background");
    }, 600);
  } else {
    body.classList.add("offcanvas-background");
  }

  //header nav click then offcanvas box gone//
  mobNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      offcanvas.classList.add("height-show");
      body.classList.remove("offcanvas-background");
      menuToggle.checked = false;
    });
  });
});
//............................counter..........................//

document.addEventListener("DOMContentLoaded", () => {
  const speed = 2000;
  const animateNumber = (counter) => {
    const target = +counter.getAttribute("data-count");
    const suffix = counter.getAttribute("data-suffix") || "";
    let current = 0;

    const increment = target / (speed / 50);

    const updateCount = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + suffix;
      } else {
        counter.textContent = Math.floor(current);
        setTimeout(updateCount, 50); // Update every 50ms
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".data-counter").forEach((counter) => {
    observer.observe(counter);
  });
});

//.........................team info show...............//

// if (window.innerWidth <= 768)
let memberSlideBox = document.querySelectorAll(".member-top-slide");
let imgInfoBox = document.querySelectorAll(".img-info-box");
// console.log(imgInfoBox);

memberSlideBox.forEach((slideBox) => {
  slideBox.addEventListener("click", () => {
    slideBox.parentElement.classList.toggle("slide-toggle");
    slideBox.parentElement.parentElement.children[0].classList.toggle(
      "slide-toggle-img"
    );
    slideBox.children[0].classList.toggle("member-icon-rotate");
  });
});

imgInfoBox.forEach((slideBox) => {
  slideBox.addEventListener("click", () => {
    slideBox.classList.toggle("gallery-info-slide-up");
  });
});

//...........................review section slider.............//

var splide = new Splide(".review-splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  rewind: true,
  autoplay: true,
  interval: 3500,
  pauseOnHover: false,
  height: "100%",
  arrows: true,
  pagination: false,
  gap: "1rem",
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  breakpoints: {
    1200: {
      perPage: 2.5,
      focus: "center",
      gap: "0.5rem",
      height: "100%",
    },
    980: {
      perPage: 2.2,
      focus: "center",
      gap: "0.5rem",
      height: "100%",
    },
    802: {
      perPage: 2,
      gap: "0.5rem",
      height: "100%",
    },
    632: {
      perPage: 1.7,
      gap: "0.5rem",
      height: "100%",
    },
    550: {
      perPage: 1.4,
      gap: "0.5rem",
      height: "100%",
    },
    480: {
      perPage: 1,
      focus: "center",
      gap: "0.25rem",
      height: "100%",
    },
  },
});

splide.mount();

//..................scroll to top...............//

let scrollTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 280) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//..................scroll reveal.............//

const sr = ScrollReveal({
  duration: 1500,
  distance: "60px",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  opacity: 0, // fade in from
  scale: 0.8,
  viewFactor: 0.15, // start when 15% visible
  reset: false,
  mobile: true,
});

sr.reveal(".hero-text", {
  origin: "bottom",
  scale: 2,
  delay: 300,
});
sr.reveal(".heading-info-text", {
  delay: 0,
});
sr.reveal(".hero-grid-box .box-1", {
  origin: "bottom",
  delay: 900,
});
sr.reveal(".hero-grid-box .box-2", {
  origin: "bottom",
  delay: 1000,
});
sr.reveal("h2.heading-main", {
  origin: "left",
  opacity: 1,
});
sr.reveal(".heading-main-desc", {
  origin: "bottom",
  opacity: 0,
});
sr.reveal(".left-col .btm-contact", {
  origin: "right",
});
sr.reveal(".left-col .top-img", {
  delay: 500,
});
sr.reveal(".section-services .service-1", {
  origin: "bottom",
  distance: "200px",
});
sr.reveal(".section-services .service-2", {
  origin: "bottom",
  distance: "200px",
  delay: 300,
});
sr.reveal(".section-services .service-3", {
  origin: "bottom",
  distance: "200px",
  delay: 500,
});
sr.reveal(".section-services .service-4", {
  origin: "bottom",
  distance: "200px",
});
sr.reveal(".section-services .service-5", {
  origin: "bottom",
  distance: "200px",
  delay: 300,
});
sr.reveal(".section-services .service-6", {
  origin: "bottom",
  distance: "200px",
  delay: 500,
});
sr.reveal(".section-pricing .price-box-1", {
  origin: "right",
  distance: "100px",
  delay: 100,
});
sr.reveal(".section-pricing .price-box-2", {
  origin: "right",
  distance: "100px",
  delay: 120,
});
sr.reveal(".section-pricing .price-box-3", {
  origin: "right",
  distance: "100px",
  delay: 100,
});
sr.reveal(".section-pricing .price-box-4", {
  origin: "right",
  distance: "100px",
  delay: 140,
});
sr.reveal(".section-pricing .price-box-5", {
  origin: "right",
  distance: "100px",
  delay: 180,
});
sr.reveal(".section-pricing .price-box-6", {
  origin: "right",
  distance: "100px",
  delay: 220,
});
sr.reveal(".section-team .member-1", {
  origin: "left",
  opacity: 1,
  delay: 200,
});
sr.reveal(".section-team .member-2", {
  origin: "left",
  opacity: 1,
  delay: 100,
});
sr.reveal(".section-team .member-3", {
  origin: "right",
  opacity: 1,
  delay: 100,
});
sr.reveal(".section-team .member-4", {
  origin: "right",
  opacity: 1,
  delay: 200,
});
sr.reveal(".section-review .btm-row", {
  origin: "bottom",
  delay: 50,
});
sr.reveal(".section-gallery .btm-row", {
  origin: "bottom",
  delay: 50,
});
sr.reveal(".section-blog .btm-col-1", {
  origin: "left",
  delay: 50,
});
sr.reveal(".section-blog .btm-col-2", {
  origin: "right",
  delay: 50,
});
sr.reveal("footer .footer-top .top-col-1", {
  origin: "left",
  delay: 50,
});
sr.reveal("footer .footer-top .top-col-2", {
  origin: "right",
  delay: 50,
});
