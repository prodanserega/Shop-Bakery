const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelectorAll('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);

menuBtnClose.forEach(function (e) {
  e.addEventListener('click', toggleMenu);
});

menuBtnOpen.addEventListener('click', disableScroll);

menuBtnClose.forEach(function (e) {
    e.addEventListener('click', disableScroll);
});







//const mobileMenu = document.querySelector('.mobile-menu');
//const menuBtnOpen = document.querySelector('.menu-btn-open');
//const menuBtnClose = document.querySelector('.menu-btn-close');

//const toggleMenu = () => mobileMenu.classList.toggle('is-open');

//menuBtnOpen.addEventListener('click', toggleMenu);
//menuBtnClose.addEventListener('click', toggleMenu);
