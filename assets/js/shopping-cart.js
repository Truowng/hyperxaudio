// RECOMMENDED SLIDE
const recommendSlider = new Swiper("#fhm-recommend .recommend-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const productQtys = document.querySelectorAll(
  "#fhm-shopping-cart .cart-table .table .table-row .qty-col"
);

if (productQtys) {
  productQtys.forEach((productQty) => {
    const qty = productQty.querySelector("input");
    const plusBtn = productQty.querySelector(".button-wrapper .next");
    const minusBtn = productQty.querySelector(".button-wrapper .prev");
    plusBtn.addEventListener("click", () => {
      let value = Number(qty.value);
      let newValue = value + 1;
      qty.value = newValue.toString();
    });
    minusBtn.addEventListener("click", () => {
      let value = Number(qty.value);
      if (value > 1) {
        let newValue = value - 1;
        qty.value = newValue.toString();
      }
    });
  });
}
