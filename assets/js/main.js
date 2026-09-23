// Body Fitness — small interactions (no libraries needed)

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
    })
  );
}

// Start date can't be in the past
const startDate = document.querySelector("#start-date");
if (startDate) {
  const today = new Date().toISOString().split("T")[0];
  startDate.min = today;
}

// Join form: this is a front-end demo, so it shows a confirmation instead of sending data
const form = document.querySelector("#join-form");
const message = document.querySelector("#form-message");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = form.elements["first-name"].value.trim();
    const classType = form.elements["class-type"].value;

    message.textContent = `Thanks, ${firstName}! You're on the list for ${classType} classes. We'll be in touch before your first session.`;
    message.hidden = false;
    form.reset();
    message.focus();
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
