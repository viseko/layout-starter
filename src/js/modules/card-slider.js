import { initFunctionBySelector } from "../functions/init-by-selector.js";
import Swiper, {Navigation, Pagination} from "swiper";

initFunctionBySelector(".js-card-slider", initSlider);

function initSlider(slider) {
  const parent = slider.parentElement;
  const prevEl = parent.querySelector("[data-role='prev']");
  const nextEl = parent.querySelector("[data-role='next']");
  const pagination = parent.querySelector("[data-role='pagination']");

  new Swiper(slider, {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 8,
    watchOverflow: true,
    navigation: {
      prevEl,
      nextEl
    },
    pagination: {
      el: pagination,
      bulletClass: "slider__bullet",
      bulletActiveClass: "slider__bullet--active",
      clickable: true
    },
    breakpoints: {
      767: {
        slidesPerView: "auto",
        spaceBetween: 16
      },
      991: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      1399: {
        slidesPerView: 4,
      }
    }
  });
}