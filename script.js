// Toggle navigation menu on mobile screens
function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Modal pop-up functionality
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
