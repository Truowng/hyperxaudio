import { hackerEffect, featureContent } from "./index.js";

const homeBannerSlide = new Swiper("#fhm-home-banner .banner-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  loop: true,
});

const playButton = document.querySelector(
  "#fhm-home-banner .banner-content-video-button"
);
const homeBannerVideo = document.querySelector(
  "#fhm-home-banner .banner-content-video"
);

if (homeBannerVideo) {
  playButton.addEventListener("click", () => {
    if (homeBannerVideo.classList.contains("pause")) {
      homeBannerVideo.classList.remove("pause");
      homeBannerVideo.classList.add("play");
      homeBannerVideo.querySelector("video").play();
    } else {
      homeBannerVideo.classList.remove("play");
      homeBannerVideo.classList.add("pause");
      homeBannerVideo.querySelector("video").pause();
    }
  });
}

const homeFeatureSlide = new Swiper(
  "#fhm-home-feature .feature-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    effect: "cards",
    perSlideOffset: 20,
    perSlideRotate: 15,
    rotate: true,
    slideShadows: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: "#fhm-home-feature .feature-content .slider-button-next",
    },
  }
);

// HACKER TEXT
const homeFeatureTitle = document.querySelector(
  "#fhm-home-feature .feature-content .heading-block .title"
);
const homeFeatureDesc = document.querySelector(
  "#fhm-home-feature .feature-content .heading-block .desc"
);
const homeFeatures = document.querySelectorAll(
  "#fhm-home-feature .feature-content-item"
);

homeFeatureSlide.on("slideChange", function () {
  let i = this.realIndex;
  homeFeatureTitle.innerText = featureContent[i].title;
  homeFeatureTitle.setAttribute("data-value", `${featureContent[i].title}`);
  homeFeatureDesc.querySelector("span").innerText = featureContent[i].desc;
  homeFeatures.forEach((homeFeature, index) => {
    homeFeature.classList.remove("active");
    homeFeatureDesc.classList.remove("active");
    setTimeout(() => {
      setTimeout(() => {
        homeFeature.classList.add("active");
        homeFeatureDesc.classList.add("active");
      }, 100);
      homeFeature
        .querySelector(".icon img")
        .setAttribute("src", `${featureContent[i].feature[index].icon}`);
      homeFeature.querySelector(".text").innerText =
        featureContent[i].feature[index].text;
    }, 1000);
  });
  hackerEffect(homeFeatureTitle);
});

//IG SLIDE
const igSlide = new Swiper("#fhm-home-instagram .instagram-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 38,
    },
  },
  navigation: {
    nextEl: "#fhm-home-instagram .instagram-slider .swiper",
  },
});

// TESTIMONIALS
const testimonialsSlide = new Swiper(
  "#fhm-home-testimonials .testimonials-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: "#fhm-home-testimonials .swiper .slider-button-next",
      prevEl: "#fhm-home-testimonials .swiper .slider-button-prev",
    },
  }
);

// COUPON

const coupon = document.querySelector("#fhm-coupon");

if (coupon) {
  const closeBtn = coupon.querySelector(".close-button");
  setTimeout(() => {
    coupon.style.display = "flex";
    coupon.style.animation = "fadeIn ease 1s";
  }, 5000);
  closeBtn.addEventListener("click", () => {
    coupon.style.animation = "fadeOut ease 1s";
    setTimeout(() => {
      coupon.style.display = "none";
    }, 1000);
  });
}
