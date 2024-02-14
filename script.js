document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLink = document.querySelectorAll(".nav-link");
  const navLinks = document.querySelector(".nav-links");

  function removeActiveClass() {
    navLink.forEach((link) => {
      link.classList.remove("active");
    });
  }

  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      removeActiveClass();
      link.classList.add("active");
      document.body.classList.remove("nav-open");
    });
  });

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove("nav-open");
    }
  });
});
