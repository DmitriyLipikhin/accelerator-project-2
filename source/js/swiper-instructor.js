import Swiper from "swiper";
import { Navigation, Mousewheel } from "swiper/modules";

new Swiper ('#swiper-instructor', {
  modules: Navigation, Mousewheel,
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 2,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 3,
      allowTouchMove: false,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
    }
  }
})
