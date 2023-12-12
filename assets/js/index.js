//HACKER TEXT
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~|,.?/{}[]-123456789";

export const hackerEffect = (el) => {
  let iterations = 0;
  const interval = setInterval(() => {
    el.innerText = el.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return el.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.split("").length)];
      })
      .join("");
    if (iterations >= el.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 5;
  }, 30);
};

export const featureContent = [
  {
    id: 1,
    title: "MONITOR II A.N.C",
    desc: "Major II delivers the signature Marshall sound that you have come to expect. 60 years of knowledge is packed into Major IV for an explosive sound. Custom-tuned dynamic drivers deliver roaring bass, smooth mids and brilliant treble for a rich, unrivalled sound that you will never want to turn off",
    feature: [
      {
        id: 1,
        icon: "./assets/images/icons/bluetooth.svg",
        text: "Easy Bluetooth Features 1",
      },
      {
        id: 2,
        icon: "./assets/images/icons/battery.svg",
        text: "Long Battery Life 1",
      },
      {
        id: 3,
        icon: "./assets/images/icons/micro.svg",
        text: "Noise Cancellation Features 1",
      },
    ],
  },
  {
    id: 2,
    title: "MONITOR IV",
    desc: "Major IV delivers the signature Marshall sound that you have come to expect. 60 years of knowledge is packed into Major IV for an explosive sound. Custom-tuned dynamic drivers deliver roaring bass, smooth mids and brilliant treble for a rich, unrivalled sound that you will never want to turn off",
    feature: [
      {
        id: 1,
        icon: "./assets/images/icons/bluetooth.svg",
        text: "Easy Bluetooth Features 2 ",
      },
      {
        id: 2,
        icon: "./assets/images/icons/battery.svg",
        text: "Long Battery Life 2",
      },
      {
        id: 3,
        icon: "./assets/images/icons/micro.svg",
        text: "Noise Cancellation Features 2",
      },
    ],
  },
  {
    id: 3,
    title: "MONITOR II A.N.C",
    desc: "Major II delivers the signature Marshall sound that you have come to expect. 60 years of knowledge is packed into Major IV for an explosive sound. Custom-tuned dynamic drivers deliver roaring bass, smooth mids and brilliant treble for a rich, unrivalled sound that you will never want to turn off",
    feature: [
      {
        id: 1,
        icon: "./assets/images/icons/bluetooth.svg",
        text: "Easy Bluetooth Features 3",
      },
      {
        id: 2,
        icon: "./assets/images/icons/battery.svg",
        text: "Long Battery Life 3",
      },
      {
        id: 3,
        icon: "./assets/images/icons/micro.svg",
        text: "Noise Cancellation Features 3",
      },
    ],
  },
  {
    id: 4,
    title: "MONITOR IV",
    desc: "Major IV delivers the signature Marshall sound that you have come to expect. 60 years of knowledge is packed into Major IV for an explosive sound. Custom-tuned dynamic drivers deliver roaring bass, smooth mids and brilliant treble for a rich, unrivalled sound that you will never want to turn off",
    feature: [
      {
        id: 1,
        icon: "./assets/images/icons/bluetooth.svg",
        text: "Easy Bluetooth Features 4",
      },
      {
        id: 2,
        icon: "./assets/images/icons/battery.svg",
        text: "Long Battery Life 4",
      },
      {
        id: 3,
        icon: "./assets/images/icons/micro.svg",
        text: "Noise Cancellation Features 4",
      },
    ],
  },
];

// HANDLE PASSWORD
const passwords = document.querySelectorAll(".password");

if (passwords) {
  passwords.forEach((password) => {
    const button = password.querySelector(".button-show");
    const input = password.querySelector("input");

    button.addEventListener("click", () => {
      if (input.type == "password") {
        input.type = "text";
        button.querySelector("img").style.filter = "invert(1)";
      } else {
        input.type = "password";
        button.querySelector("img").style.filter = "unset";
      }
    });
  });
}

// CHANGE WIDTH
const aboutImages = document.querySelectorAll(
  ".about .about-image-list .about-image-item"
);

if (aboutImages) {
  aboutImages.forEach((aboutImage) => {
    aboutImage.addEventListener("click", () => {
      document
        .querySelector(".about .about-image-list .about-image-item.active")
        .classList.remove("active");
      aboutImage.classList.add("active");
    });
  });
}

// NEWS SLIDE
const newsSlide = new Swiper(".news .news-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// ADVANTAGE SLIDE
const advantageSlide = new Swiper(".advantage .advantage-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".advantage .advantage-slider .swiper .swiper-pagination",
  },
});

// HOT PRODUCT SLIDE
const HotProductsSlider = new Swiper(
  ".hot-products .hot-products-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".hot-products .hot-products-slider .slider-button-next",
      prevEl: ".hot-products .hot-products-slider .slider-button-prev",
    },
  }
);
