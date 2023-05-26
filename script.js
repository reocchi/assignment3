var navMenu = document.getElementsByClassName('hamburger_menu')[0];

var nav = document.getElementsByClassName('hamburger')[0];

navMenu.addEventListener('click', function () {

    nav.classList.toggle('is_active');
    console.log('Hello!!');
}, false);

var cartLink = document.getElementsByClassName('cart_link')[0];

if (window.screen.width >= 490) {
    console.log('above 490');
    document.getElementsByClassName('cart_link')[0].href = "order.html";
}