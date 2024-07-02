/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the Navigation Menu Dynamically
const buildNav = () => {
    sections.forEach(section =>{
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.classList.add('menu__link');
        navLink.setAttribute('href', `#${section.id}`);
        navLink.textContent = section.getAttribute('data-nav');
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    })
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("DOMContentLoaded", buildNav);
// Scroll to section on link click

// Set sections as active


