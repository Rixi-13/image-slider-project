var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
    pagination: {
      el: ".swiper-pagination"
    }
  });
  