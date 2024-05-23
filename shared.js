document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
  
    hamburger.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');
    });
  });
  