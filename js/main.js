const hamburgerButton = document.querySelector("#ham-menu");
const navMenu = document.querySelector(".navmenu");


console.log(hamburgerButton);
console.log(navMenu);

hamburgerButton.addEventListener("click", function() {
    navMenu.classList.toggle("hide");
    hamburgerButton.classList.toggle("fa-xmark"); 
});


