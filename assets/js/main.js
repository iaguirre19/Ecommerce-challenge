const slides = document.querySelectorAll(".slideshows__slide");
const intervalTime = 7000;


let slideInterval;
const nextSlide = () => {
  const currentSlide = document.querySelector(".slideshows__slide.active");
  if (currentSlide) {
    currentSlide.classList.remove("active");
    if (currentSlide.nextElementSibling) {
      currentSlide.nextElementSibling.classList.add("active");
    } else {
      slides[0].classList.add("active");
    }
  } else {
    slides[0].classList.add("active");
  }
};
slides[0].classList.add("active");
slideInterval = setInterval(nextSlide, intervalTime);


