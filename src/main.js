const openMenuBtn = document.querySelector('.menu-open-btn');
const closeMenuBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');

openMenuBtn?.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeMenuBtn?.addEventListener('click', () => {
  menu.classList.remove('is-open');
});