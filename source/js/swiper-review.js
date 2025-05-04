import Swiper from "swiper";
import { Navigation, Mousewheel } from "swiper/modules";

new Swiper ('#swiper-review', {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    freeMode: false,

    breakpoints: {
        320: {
            slidesPerView: 1,
            allowTouchMove: true,
            initialSlide: 0,
            spaceBetween: 20
        },
        768: {
            allowTouchMove: false,
            slidesPerView: 1.265,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 1.755,
            spaceBetween: 120
        }
    },

    navigation: {
        nextEl: '.reviews__button-right',
        prevEl: '.reviews__button-left'
    }
})