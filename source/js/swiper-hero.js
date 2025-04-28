import Swiper from "swiper";
import {Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css';

new Swiper ('#swiper-hero', {
  modules: [Pagination, Mousewheel],
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
      allowTouchMove: false,
    },
  }
});
