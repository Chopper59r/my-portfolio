// ==============================
// Custom JavaScript for portfolio
// ==============================
//
// This file contains:
// 1) Project filtering by year (All / 2nd / 3rd / 4th)
// 2) A simple contact form handler (shows a thank-you message)
//
// It does NOT rely on Bootstrap's JS; it's your own logic.

// Run our code only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ==============================
  // 1. Projects filtering by year
  // ==============================

  // Select all filter buttons inside the #projects section
  const filterButtons = document.querySelectorAll("#projects [data-filter]");

  // Select all project "cards" (the column elements with data-year attributes)
  const projectCards = document.querySelectorAll("#projectsGrid > div");

  // If we found the buttons and cards, set up the filtering behaviour
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Get the filter value from the clicked button (all / year2 / year3 / year4)
        const filterValue = this.getAttribute("data-filter");

        // 1. Update which button looks "active"
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // 2. Show / hide project cards based on the selected filter
        projectCards.forEach((card) => {
          const cardYear = card.getAttribute("data-year");

          // If "all" is selected OR the card's year matches the filter, show it
          if (filterValue === "all" || filterValue === cardYear) {
            // Remove Bootstrap's d-none class if it exists, so the card is visible
            card.classList.remove("d-none");
          } else {
            // Add Bootstrap's d-none class to hide the card
            card.classList.add("d-none");
          }
        });
      });
    });
  }

  // ==========================================
  // 2. Simple contact form "fake" submission
  // ==========================================
  //
  // This does NOT send an actual email.
  // It:
  // - Prevents the normal form submission
  // - Shows a browser alert thanking the user
  // - Clears (resets) the form fields

  // Select the contact form inside the #contact section
  const contactForm = document.querySelector("#contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Stop the form from actually submitting / refreshing the page
      event.preventDefault();

      // Get the name input (if the user filled it in)
      const nameInput = contactForm.querySelector("#name");
      const nameValue = nameInput ? nameInput.value.trim() : "";

      // Build a friendly message
      const message = nameValue
        ? `Thank you for your message, ${nameValue}! I will get back to you soon.`
        : "Thank you for your message! I will get back to you soon.";

      // Show a simple alert (you could later replace this with a custom popup or toast)
      alert(message);

      // Reset the form fields so it looks cleared
      contactForm.reset();
    });
  }

  // (Optional) If you want to see in the console that JS loaded:
  console.log("Custom JS loaded: project filtering and contact form ready.");
});
