let menuBar = document.getElementById("menuBar");
let mainMenu = document.getElementById("mainMenu");

menuBar.addEventListener("click",function() {
    if (mainMenu.classList.contains("main-menu")) {
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-menu");
    }
    else {
           mainMenu.classList.add("main-menu");
           mainMenu.classList.remove("main-menu-block")        
         }
});    
/*mainAv.classList.remove("main-nav");
mainNav.classList.add("main-nav-2")*/