const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Wallets",
    price: 129,
    colors: [
      { code: "orange", img: "./img/wallet_orange.png" },
      { code: "red", img: "./img/wallet_red.png" },
      { code: "blue", img: "./img/wallet_blue.png" },
      { code: "green", img: "./img/wallet_green.png" },
    ],
  },
  {
    id: 2,
    title: "Purses",
    price: 259,
    colors: [
      { code: "orange", img: "./img/purse_orange.png" },
      { code: "red", img: "./img/purse_red.png" },
      { code: "blue", img: "./img/purse_blue.png" },
      { code: "green", img: "./img/purse_green.png" },
    ],
  },
  {
    id: 3,
    title: "Travel Bags",
    price: 489,
    colors: [
      { code: "orange", img: "./img/travelbag_orange.png" },
      { code: "red", img: "./img/travelbag_red.png" },
      { code: "blue", img: "./img/travelbag_blue.png" },
      { code: "green", img: "./img/travelbag_green.png" },
    ],
  },
];

let currentIndex = 0;
let choosenProduct = products[0];

/* ---------- Init ---------- */
function initRightPanel() {
  const activeSlide = document.querySelectorAll(".sliderItem")[currentIndex];
  const rightPanel = activeSlide.querySelector(".rightPanel");
  const rightPanelColors = rightPanel.querySelectorAll(".color");

  // set colors
  rightPanelColors.forEach((color, i) => {
    color.style.backgroundColor = choosenProduct.colors[i].code;
    color.classList.remove("selected");
  });
  if (rightPanelColors[0]) {
    rightPanelColors[0].classList.add("selected");
  }

  updatePrice(rightPanel);

  // set initial product image
  const slideImg = activeSlide.querySelector(".productImg");
  slideImg.src = choosenProduct.colors[0].img;
  slideImg.alt = choosenProduct.title;
}
initRightPanel();

/* ---------- Update Price ---------- */
function updatePrice(panel) {
  const priceEl = panel.querySelector(".productPrice");
  priceEl.textContent = choosenProduct.price + " Euro";
}

/* ---------- Menu Item Click ---------- */
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // move slider
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    currentIndex = index;
    choosenProduct = products[index];

    const activeSlide = document.querySelectorAll(".sliderItem")[currentIndex];
    const rightPanel = activeSlide.querySelector(".rightPanel");
    const rightPanelColors = rightPanel.querySelectorAll(".color");

    // update colors
    rightPanelColors.forEach((color, i) => {
      color.style.backgroundColor = choosenProduct.colors[i].code;
      color.classList.remove("selected");
    });
    if (rightPanelColors[0]) {
      rightPanelColors[0].classList.add("selected");
    }

    // update price
    updatePrice(rightPanel);

    // update image
    const slideImg = activeSlide.querySelector(".productImg");
    slideImg.src = choosenProduct.colors[0].img;
    slideImg.alt = choosenProduct.title;
  });
});

/* ---------- Right Panel Color Click ---------- */
document.querySelectorAll(".sliderItem").forEach((slide, slideIndex) => {
  const rightPanelColors = slide.querySelectorAll(".color");
  const imgEl = slide.querySelector(".productImg");

  rightPanelColors.forEach((color, colorIndex) => {
    color.addEventListener("click", () => {
      const product = products[slideIndex];

      rightPanelColors.forEach((c) => c.classList.remove("selected"));
      color.classList.add("selected");

      imgEl.src = product.colors[colorIndex].img;
      imgEl.alt = product.title;
    });
  });
});
