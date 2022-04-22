
// Import Libs from npm
import Swiper, { Navigation, Pagination } from 'swiper';

// Swiper benefits init
const swiperBenefits = new Swiper('.js-slider-benefits', {
  // configure Swiper to use modules
  modules: [Pagination],

  slidesPerView: 4,
  spaceBetween: 29,
  loop: false,
  allowTouchMove: false,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
      allowTouchMove: true
    },
    1023: {
      spaceBetween: 13
    },
    1200: {
      spaceBetween: 29
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// Swiper team init
const swiperTeam = new Swiper('.js-slider-team', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  loop: false,
  loopFillGroupWithBlank: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Swiper employees init
const swiperEmployees = new Swiper('.js-slider-employees', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  loop: false,
  loopFillGroupWithBlank: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
