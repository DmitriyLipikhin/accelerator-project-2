import Swiper from "swiper";
import { Navigation } from "swiper/modules";

let swiperInstance;

function createSwiper() {
  swiperInstance = new Swiper('#swiper-advantages', {
    modules: [Navigation],
    loop: true,
    allowTouchMove: true,
    initialSlide: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    slidesPerView: 3.58,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.advantages__button-right',
      prevEl: '.advantages__button-left'
    }
  });
}

if (window.innerWidth >= 1440) {
  createSwiper();
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1440 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  } else if (window.innerWidth >= 1440 && !swiperInstance) {
    createSwiper();
  }
});
