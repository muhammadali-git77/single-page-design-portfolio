window.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector("swiper-container");

  const waitForSwiper = () => {
    return new Promise((resolve) => {
      if (swiperEl.swiper) {
        resolve(swiperEl.swiper);
      } else {
        swiperEl.addEventListener("swiper:init", (event) => {
          resolve(event.target.swiper);
        });
      }
    });
  };

  waitForSwiper().then((swiper) => {
    document.getElementById("prevBtn").addEventListener("click", () => {
      swiper.slidePrev();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      swiper.slideNext();
    });
  });
});
