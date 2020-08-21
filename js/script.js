// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");
var hero = document.getElementById("hero");

var fritz_h1 = document.getElementById("fritz");
var menu_h1 = document.getElementById("menu");
var awards_h1 = document.getElementById("awards");
var reviews_h1 = document.getElementById("reviews");
var location_h1 = document.getElementById("location");
var contact_h1 = document.getElementById("contact");


// Get the offset position of the navbar
var sticky = navbar.offsetTop;


//Get the offset position of active section
var fritz_top = fritz_h1.offsetTop;
var menu_top = menu_h1.offsetTop;
var awards_top = awards_h1.offsetTop;
var reviews_top = reviews_h1.offsetTop;
var location_top = location_h1.offsetTop;
var contact_top = contact_h1.offsetTop;

var fritz_id = document.getElementById("fritz_nav");
var menu_id = document.getElementById("menu_nav");
var awards_id = document.getElementById("awards_nav");
var reviews_id = document.getElementById("reviews_nav");
var location_id = document.getElementById("location_nav");
var contact_id = document.getElementById("contact_nav");


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

    if (window.pageYOffset >= fritz_top) {
        fritz_id.classList.add("active-nav")
    } else {
        fritz_id.classList.remove("active-nav")
    }

    if (window.pageYOffset + 40 >= menu_top) {
        menu_id.classList.add("active-nav")
        fritz_id.classList.remove("active-nav")
    } else {
        menu_id.classList.remove("active-nav")
    }

    if (window.pageYOffset + 40 >= awards_top) {
        awards_id.classList.add("active-nav")
        fritz_id.classList.remove("active-nav")
        menu_id.classList.remove("active-nav")
    } else {
        awards_id.classList.remove("active-nav")
    }
    if (window.pageYOffset + 40 >= reviews_top) {
        reviews_id.classList.add("active-nav")
        fritz_id.classList.remove("active-nav")
        menu_id.classList.remove("active-nav")
        awards_id.classList.remove("active-nav")
    } else {
        reviews_id.classList.remove("active-nav")
    }
    if (window.pageYOffset + 40 >= location_top) {
        location_id.classList.add("active-nav")
        fritz_id.classList.remove("active-nav")
        menu_id.classList.remove("active-nav")
        awards_id.classList.remove("active-nav")
        reviews_id.classList.remove("active-nav")
    } else {
        location_id.classList.remove("active-nav")
    }
    if (window.pageYOffset + 40 >= contact_top) {
        contact_id.classList.add("active-nav")
        fritz_id.classList.remove("active-nav")
        menu_id.classList.remove("active-nav")
        awards_id.classList.remove("active-nav")
        reviews_id.classList.remove("active-nav")
        location_id.classList.remove("active-nav")
    } else {
        contact_id.classList.remove("active-nav")
    }
}


var display_menu = document.getElementById("display-menu")

display_menu.addEventListener("click", function(event) {
    navbar.classList.add("show-menu");
}, false);


navbar.addEventListener("click", function(event) {
    navbar.classList.add("hide-menu");
    navbar.classList.remove("show-menu");
}, false);