// ============================
// THEME TOGGLE
// ============================
const toggle = document.getElementById("theme-toggle");

// Set initial icon
toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// ============================
// CONTACT FORM (Demo)
// ============================
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully! (Demo)");
  contactForm.reset();
});


// ============================
// SCROLL REVEAL 
// ============================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ============================
// MOBILE MENU TOGGLE
// ============================
// ============================
// THEME TOGGLE
// ============================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ============================
// MENU TOGGLE
// ============================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Auto-close on link click
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Auto-close on scroll
window.addEventListener("scroll", () => {
  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
});

