const detailColors = document.querySelectorAll(
  "#fhm-products-detail .detail-info .color .list .item"
);

detailColors.forEach((detailColor) => {
  detailColor.addEventListener("click", () => {
    document
      .querySelector(
        "#fhm-products-detail .detail-info .color .list .item.select"
      )
      .classList.remove("select");
    detailColor.classList.add("select");
  });
});

// SLIDE
const productsDetailRelate = new Swiper(
  "#fhm-products-detail-relate .relate-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 18,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  }
);
