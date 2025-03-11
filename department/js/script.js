// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// Add event listener for keyboard navigation
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    swiper.slideNext(); // Move to the next slide
  } else if (event.key === "ArrowLeft") {
    swiper.slidePrev(); // Move to the previous slide
  }
});