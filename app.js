function toggleNav() {
  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("active");
}

let currentIndex = 0;
const autoSlideInterval = 4000;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, autoSlideInterval);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  setTimeout(autoSlide, autoSlideInterval);
});

//Modal pop-up functionality
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block"; // Show the modal
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none"; // Hide the modal
}

// Accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle the display of the associated content
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // Toggle the active class for the button
    this.classList.toggle("active");
  });
});
