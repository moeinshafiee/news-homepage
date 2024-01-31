
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".main-nav");

navToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('nav-visible');
});
