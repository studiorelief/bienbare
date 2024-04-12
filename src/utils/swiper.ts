import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperTeam() {
  new Swiper('.swiper.is-thematiques', {
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-right',
      prevEl: '.swiper-left',
    },
    mousewheel: {
      forceToAxis: true,
    },
    slideActiveClass: 'is-active',
    /* autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    }, */

    speed: 0,
  });
}

export function swiperParole() {
  new Swiper('.swiper.is-parole', {
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 64, // variable
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-right',
      prevEl: '.swiper-left',
    },
    mousewheel: {
      forceToAxis: true,
    },
    slideActiveClass: 'is-active',
    speed: 1500,
    breakpoints: {
      991: {
        centeredSlides: false,
        slidesPerView: 3,
      },
      0: {
        centeredSlides: true,
        slidesPerView: 1,
      },
    },
  });
}
