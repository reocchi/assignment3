// Toggle Menu
var navMenu = document.getElementsByClassName('hamburger_menu')[0];
var nav = document.getElementsByClassName('hamburger')[0];
navMenu.addEventListener('click', function () {

    nav.classList.toggle('is_active');
}, false);


// Change change the link of 'Add to Cart' on desktop
var cartLink = document.getElementsByClassName('cart_link')[0];
if (window.screen.width >= 490) {
    console.log('above 490');
    document.getElementsByClassName('cart_link')[0].href = "order.html";
}

// Change the quantity

var plusBtn = document.getElementsByClassName('plus')[0];
var minusBtn = document.getElementsByClassName('minus')[0];

var orderQty = document.getElementsByClassName('quantity')[0];

const state = { count: 0 };

plusBtn.addEventListener('click', function (){
    console.log('clicked!');
    orderQty.innerHTML  = ++state.count;

    
}, false);

minusBtn.addEventListener('click', function (){
    console.log('clicked!');
    if (state.count > 0) {
       orderQty.innerHTML  = --state.count; 
    }
    
}, false);
