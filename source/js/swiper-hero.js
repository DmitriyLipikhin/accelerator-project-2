import Swiper from "swiper";
import {Pagination, Mousewheel} from 'swiper/modules';

new Swiper ('#swiper-hero', {
  modules: [Pagination, Mousewheel],
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,

  pagination: {
      el: '.hero__pagination',
      bulletClass: 'hero__pagination-button',
      bulletActiveClass: 'hero__pagination-button-active',
      type: 'bullets',
      clickable: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 0
    },
    768: {
      allowTouchMove: false,
    },
  }
});
