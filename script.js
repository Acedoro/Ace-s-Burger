// Application State
let isMenuOpen = false;
let activeLink = null;

// Elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-link");
const notification = document.getElementById("notification");
const container = document.querySelector(".navbar-container");

// Toggle Menu (Event Handling + State)
hamburger.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        navLinks.classList.add("show");
    } else {
        navLinks.classList.remove("show");
    }
});

// Active Link + Async Notification + preventDefault
links.forEach(link => {
    link.addEventListener("click", (event) => {

        // Prevent page reload
        event.preventDefault();

        // State update for active link
        if (activeLink) {
            activeLink.classList.remove("active");
        }

        activeLink = link;
        activeLink.classList.add("active");

        // Show loading message
        notification.textContent = "Loading page...";

        // Asynchronous behavior
        setTimeout(() => {
            notification.textContent = "Page Loaded!";
        }, 2000);

        // Close menu automatically on mobile
        navLinks.classList.remove("show");
        isMenuOpen = false;

        console.log("Link clicked");
    });
});

// Event Propagation Demonstration
container.addEventListener("click", () => {
    console.log("Container clicked");
});
