// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");
var hero = document.getElementById("hero");
var fritz = document.getElementById("prueba");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        hero.classList.add("fix-height")
    } else {

        navbar.classList.add("sticky-add")
        navbar.classList.remove("sticky")
        navbar.classList.remove("sticky-add")
        hero.classList.remove("fix-height")
    }
}