const navLinks = document.querySelector('#main-nav ul');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})

// close nav on link click
function closeNav() {
  navLinks.classList.toggle('active');
}