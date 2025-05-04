import Swiper from "swiper";
import {Navigation,Mousewheel} from "swiper/modules";

new Swiper ('#swiper-tours', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 0
    },
    768: {
      slidesPerView: 2,
      allowTouchMove: false,
      spaceBetween: 18
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.tours__button-right',
    prevEl: '.tours__button-left'
  }
})
