const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let text = document.querySelector(".hero .content");

  text.style.marginBottom = value * 2.5 + "px";
});
