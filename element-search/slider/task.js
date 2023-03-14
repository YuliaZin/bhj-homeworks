const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const sliders = Array.from(document.querySelectorAll(".slider__item"));
let number = 0;

function switchSliders(ind) {
  let sliderItem = sliders.findIndex(item => item.className === "slider__item slider__item_active");
  sliders[sliderItem].className = "slider__item";
  if (ind < 0) {
    ind = sliders.length - 1;
  } else if (ind > sliders.length - 1) {
    ind = 0;
  }
  number = ind;
  sliders[number].className = "slider__item slider__item_active";
}

sliders[number].className = "slider__item slider__item_active";

next.onclick = function() {
  switchSliders(++number)
}

prev.onclick = function() {
  switchSliders(--number)
}