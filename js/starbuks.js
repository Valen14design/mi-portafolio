let minigreen = document.getElementById("minigreen");
let minidarkpink = document.getElementById("minidarkpink");
let miniligthpink = document.getElementById("miniligthpink");
let maincircle = document.getElementById("maincircle");
let icestarbucks = document.getElementById("icestarbucks")

minigreen.addEventListener("mouseover",function(){
   maincircle.classList.add("main-circle-green")
   maincircle.classList.remove("main-circle-ligth-pink")
   maincircle.classList.remove("main-circle-dark-pink")
   icestarbucks.src = "img/starbucks/img1.png";
});
miniligthpink.addEventListener("mouseover",function(){
    maincircle.classList.remove("main-circle-green")
    maincircle.classList.add("main-circle-ligth-pink")
    maincircle.classList.remove("main-circle-dark-pink")
    icestarbucks.src = "img/starbucks/img2.png";
});
minidarkpink.addEventListener("mouseover",function(){
    maincircle.classList.remove("main-circle-green")
    maincircle.classList.remove("main-circle-ligth-pink")
    maincircle.classList.add("main-circle-dark-pink")
    icestarbucks.src = "img/starbucks/img3.png";
});