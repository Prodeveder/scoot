

const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close__img');
const menu = document.querySelector('.menu__container');

const MainNav = document.querySelector('.nav__main');
console.log(MainNav.style)

openMenu.addEventListener('click', ()=> {
    menu.style.display = 'flex';
    
    MainNav.style.justifyContent = 'flex-end';
})

closeMenu.addEventListener('click', ()=> {
    menu.style.display = 'none';
    MainNav.style.justifyContent = 'center';


})
