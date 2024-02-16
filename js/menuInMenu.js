const BtnMenuCoffee = document.querySelector (".BtnMenuCoffee");
const BtnMenuTea = document.querySelector(".BtnMenuTea");
const BtnMenuDessert = document.querySelector(".BtnMenuDessert");
const menuCardsCoffee = document.querySelector(".menuCardsCoffee");
const menuCardsTea = document.querySelector(".menuCardsTea");
const menuCardsDessert = document.querySelector(".menuCardsDessert");
const body = document.body;

BtnMenuCoffee.addEventListener('click', functionClickCoffee);
BtnMenuTea.addEventListener('click', functionClickTea);
BtnMenuDessert.addEventListener('click', functionClickDessert);


function functionClickCoffee() {
    menuCardsCoffee.classList.add("activ");
    menuCardsTea.classList.remove("activ");
    menuCardsDessert.classList.remove("activ");
    
}

function functionClickTea() {
    menuCardsCoffee.classList.remove("activ");
    menuCardsTea.classList.add("activ");
    menuCardsDessert.classList.remove("activ");
    
}

function functionClickDessert() {
    menuCardsCoffee.classList.remove("activ");
    menuCardsTea.classList.remove("activ");
    menuCardsDessert.classList.add("activ");
    
}