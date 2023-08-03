/* Variable for hamburger button */
const hamburgerButton = document.querySelector("#ham-menu");
/* Variable for nav element */
const navMenu = document.querySelector(".navmenu");

/* Click event for the hamburger menu, toggling classLists for the hamburger menu and navigation ul
    hide - will hide the element
    fa-xmark - will swap the hamburger menu with an X
*/
hamburgerButton.addEventListener("click", function() {
    navMenu.classList.toggle("hide");
    hamburgerButton.classList.toggle("fa-xmark"); 
});


