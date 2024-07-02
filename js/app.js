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
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const header = document.querySelector(".page__header");
const sectionHeaders = document.querySelectorAll(".section__header");

let scrollTimeout;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const isInView = (section) => {
  const rect = section.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the Navigation Menu Dynamically
const buildNav = () => {
  sections.forEach((section) => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.classList.add("menu__link");
    navLink.setAttribute("href", `#${section.id}`);
    navLink.textContent = section.getAttribute("data-nav");
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });
};

// Add class 'active' to section when near top of viewport
const setActiveSection = () => {
  sections.forEach((section) => {
    const navLink = document.querySelector(`a[href="#${section.id}"]`);
    const content = section.querySelector(".section__content");
    if (isInView(section)) {
      if (content.classList.contains("expanded")) {
        section.classList.add("is-active");
      }
      navLink.classList.add("is-active");
    } else {
      section.classList.remove("is-active");
      navLink.classList.remove("is-active");
    }
  });
};

// Scroll to anchor ID using scrollTO event
const scrollToSection = (e) => {
  if (e.target.nodeName === "A") {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Add class 'hidden' to page header when not scrolling
const showNavbar = () => {
  header.classList.remove("hidden");
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    header.classList.add("hidden");
  }, 2000);
};

const toggleSection = (header) => {
  const content = header.nextElementSibling;
  content.classList.toggle("expanded");
  const arrowIcon = header.querySelector(".arrow-icon");
  arrowIcon.textContent = content.classList.contains("expanded")
    ? "\u25B3"
    : "\u25BD";
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener("DOMContentLoaded", buildNav);
// Scroll to section on link click
navList.addEventListener("click", scrollToSection);
// Set sections as active
document.addEventListener("scroll", setActiveSection);
// Show/hide NavBar when scrolling
document.addEventListener("mousemove", showNavbar);
document.addEventListener("touchstart", showNavbar);
document.addEventListener("click", showNavbar);
// Show/hide section when clicked
sectionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    toggleSection(header);
  });
});
