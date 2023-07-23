import { initFunctionBySelector } from "../functions/init-by-selector.js";
import Swiper, {Navigation, Pagination} from "swiper";

initFunctionBySelector(".js-main-slider", initSlider);

function initSlider(slider) {
  const parent = slider.closest(".main-slider");
  const prevEl = parent.querySelector("[data-role='prev']");
  const nextEl = parent.querySelector("[data-role='next']");
  const pagination = parent.querySelector("[data-role='pagination']");

  new Swiper(slider, {
    modules: [Navigation, Pagination],
    navigation: {
      prevEl,
      nextEl
    },
    pagination: {
      el: pagination,
      bulletClass: "slider__bullet",
      bulletActiveClass: "slider__bullet--active",
      clickable: true
    }
  });
}