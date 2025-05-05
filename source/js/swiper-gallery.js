import Swiper from "swiper";
import { Navigation, Mousewheel } from "swiper/modules";

new Swiper ('#swiper-gallery', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      allowTouchMove: true,
      initialSlide: 0,
      spaceBetween: 5
    },

    768: {
      slidesPerView: 3,
      allowTouchMove: false,
      spaceBetween: 5
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 5,
      enabled: false
    }
  },

  navigation: {
    nextEl: '.gallery__button-right',
    prevEl: '.gallery__button-left'
  }
});
