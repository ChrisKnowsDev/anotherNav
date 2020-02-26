const navLinks = document.querySelector('#main-nav ul');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})