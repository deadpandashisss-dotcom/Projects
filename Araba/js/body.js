//! SLIDER
const slider = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  intervalId = setInterval(nextSlide, 4000);
});

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("displaySlide"));
  slides[index].classList.add("displaySlide");
}

function stopSlider() {
  clearInterval(intervalId);
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", () => {
  intervalId = setInterval(nextSlide, 3000);
});

//! LOADING


//! REVEAL
window.addEventListener("load", () => {
  const reveals = document.querySelectorAll(".reveal");
  setTimeout(() => {  // 2.1 saniye gecikme
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        reveals.forEach((el, index) => {
          setTimeout(() => el.classList.add("active"), index * 120);
        });
      });
    });
  }, 2100); // 2100ms = 2.1 saniye
});