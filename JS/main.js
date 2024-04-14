import modal from "./modules/modal.js"

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
  modal();
})


// swiper ↓↓↓↓
const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    slidesPerView: 1,

    spaceBetween: 24,

    breakpoints: {
      768: {
          slidesPerView: 2
      },

      1024: {
          slidesPerView: 3,
          spaceBetween: 114,
      }
    },
 })