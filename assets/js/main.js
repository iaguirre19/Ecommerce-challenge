
const slides = document.querySelectorAll(".slideshows__slide");
const hero = document.querySelector(".hero");

const intervalTime = 7000;

let slideInterval;
let currentIndex = 0;

const colors = [
  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(86,95,100,1) 100%)",
  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(89,102,126,1) 72%, rgba(66,81,108,1) 82%, rgba(38,55,86,1) 94%, rgba(24,42,75,1) 100%)",
  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(3,122,104,1) 100%)"
];

const nextSlide = () => {
  const currentSlide = document.querySelector(".slideshows__slide.active");
  const currentSection = document.querySelector("section.hero");

  if (currentSlide) {
    currentSlide.classList.remove("active");
    currentSection.classList.remove("back-class");

    if (currentSlide.nextElementSibling) {
      currentSlide.nextElementSibling.classList.add("active");
      currentIndex = (currentIndex + 1) % colors.length; // Incrementar el índice y volver al inicio si es necesario
    } else {
      slides[0].classList.add("active");
      currentIndex = 0;
    }
  } else {
    slides[0].classList.add("active");
    currentIndex = 0;
  }

  const newActiveSlide = document.querySelector(".slideshows__slide.active");
  const newActiveSection = document.querySelector("section.hero");

  if (newActiveSlide && newActiveSection) {
    newActiveSection.style.backgroundImage = colors[currentIndex];
    newActiveSection.classList.add("back-class");
  }
};

slides[0].classList.add("active");
nextSlide(); // Aplicar la clase back-class en el primer slide al cargar por primera vez
slideInterval = setInterval(nextSlide, intervalTime);
