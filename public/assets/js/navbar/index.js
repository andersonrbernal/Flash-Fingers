const navbarUserMenu = document.querySelector('#navbar-user-menu')
const usernameDropdownButton = document.querySelector('#username-dropdown')
let isNavbarUserMenuOpen = false;

usernameDropdownButton.addEventListener('click', function () {
    isNavbarUserMenuOpen = !isNavbarUserMenuOpen
    if (isNavbarUserMenuOpen) {
        navbarUserMenu.classList.remove('hidden')
        navbarUserMenu.classList.add('block')
    } else {
        navbarUserMenu.classList.remove('block')
        navbarUserMenu.classList.add('hidden')
    }
})