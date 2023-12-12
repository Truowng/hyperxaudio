import { hackerEffect, featureContent } from "./index.js";

const productsListFeatureSlide = new Swiper(
  "#fhm-products-list-feature .feature-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
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
      nextEl: "#fhm-products-list-feature .feature-content .slider-button-next",
    },
  }
);

// HACKER TEXT
const productsListFeatureTitle = document.querySelector(
  "#fhm-products-list-feature .feature-content .heading-block .title"
);
const productsListFeatureDesc = document.querySelector(
  "#fhm-products-list-feature .feature-content .heading-block .desc"
);
const productsListFeatures = document.querySelectorAll(
  "#fhm-products-list-feature .feature-content-item"
);

productsListFeatureSlide.on("slideChange", function () {
  let i = this.realIndex;
  productsListFeatureTitle.innerText = featureContent[i].title;
  productsListFeatureTitle.setAttribute(
    "data-value",
    `${featureContent[i].title}`
  );
  productsListFeatureDesc.querySelector("span").innerText =
    featureContent[i].desc;
  productsListFeatures.forEach((productsListFeature, index) => {
    productsListFeature.classList.remove("active");
    productsListFeatureDesc.classList.remove("active");
    setTimeout(() => {
      setTimeout(() => {
        productsListFeature.classList.add("active");
        productsListFeatureDesc.classList.add("active");
      }, 100);
      productsListFeature
        .querySelector(".icon img")
        .setAttribute("src", `${featureContent[i].feature[index].icon}`);
      productsListFeature.querySelector(".text").innerText =
        featureContent[i].feature[index].text;
    }, 1000);
  });
  hackerEffect(productsListFeatureTitle);
});
