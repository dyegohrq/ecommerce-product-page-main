// Button function
const button = document.getElementById('burger-menu')
const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close-menu')

button.addEventListener('click', (e) => {
    menu.classList.add('active')
})

closeMenu.addEventListener('click', (e) => {
    menu.classList.remove('active')
})