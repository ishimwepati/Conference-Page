const openMenu = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-btn');
const navMenu = document.querySelector('.list-menu');

function showMenu() {
  navMenu.style.display = 'block';
  navMenu.style.height = '100%';
}

function hideMenu() {
  navMenu.style.display = 'none';
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);