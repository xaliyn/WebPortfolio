function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".navigation-icon");
  menu.classList.toggle("active");
  icon.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".navigation-icon");
      menu.classList.remove("active");
      icon.classList.remove("active");
    });
  });
});