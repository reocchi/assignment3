var navMenu = document.getElementsByClassName('hamburger_menu')[0];

var nav = document.getElementsByClassName('hamburger')[0];

navMenu.addEventListener('click', function () {

    nav.classList.toggle(' is_active');
    console.log('Hello!!');
}, false);