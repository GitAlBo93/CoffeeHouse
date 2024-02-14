const BtnMenuCoffee = document.querySelector (".BtnMenuCoffee");
const BtnMenuTea = document.querySelector(".BtnMenuTea");
const BtnMenuDessert = document.querySelector(".BtnMenuDessert");
const menuCardsCoffee = document.querySelector("menuCardsCoffee");
const menuCardsTea = document.querySelector("menuCardsTea");
const menuCardsDessert = document.querySelector("menuCardsDessert");

BtnMenuTea.addEventListener('click', functionClickTea);
BtnMenuDessert.addEventListener('click', functionClickDessert);

function functionClickTea() {
    menuCardsTea.classList.toggle("active");
    
}