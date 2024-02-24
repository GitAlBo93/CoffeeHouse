const BtnMenuCoffee = document.querySelector (".BtnMenuCoffee");
const BtnMenuTea = document.querySelector(".BtnMenuTea");
const BtnMenuDessert = document.querySelector(".BtnMenuDessert");
const menuCardsCoffee = document.querySelector(".menuCardsCoffee");
const menuCardsTea = document.querySelector(".menuCardsTea");
const menuCardsDessert = document.querySelector(".menuCardsDessert");
const BtnUpdate = document.querySelector(".menuContainerButtonUpdate");

const idCoffee = document.getElementById('menuCardCoffeeClass');
const idTea = document.getElementById('menuCardTeaClass');
const idDessert = document.getElementById('menuCardDessertClass');

const menuCardCoffeeActiveMobile = document.querySelector(".menuCardCoffeeActiveMobile");
const menuCardCoffeeNoActiveMobile = document.querySelector(".menuCardCoffeeNoActiveMobile");
const menuCardDessertActiveMobile = document.querySelector(".menuCardDessertActiveMobile");
const menuCardDessertNoActiveMobile = document.querySelector(".menuCardDessertNoActiveMobile");



BtnMenuCoffee.addEventListener('click', functionClickCoffee);
BtnMenuTea.addEventListener('click', functionClickTea);
BtnMenuDessert.addEventListener('click', functionClickDessert);
BtnUpdate.addEventListener('click', functionClickUpdate);

function functionClickUpdate(){

    if (idCoffee.classList.contains('menuActive')) {
        menuCardCoffeeNoActiveMobile.classList.toggle("activ");
        menuCardCoffeeNoActiveMobile.classList.remove("noActive");
        menuCardCoffeeActiveMobile.classList.toggle("noActive");
        menuCardCoffeeActiveMobile.classList.toggle("activ");
      console.log('Элемент Coffee класс "menuActive"');
    } 
    if (idDessert.classList.contains('menuActive')) {
        menuCardDessertNoActiveMobile.classList.toggle("activ");
        menuCardDessertNoActiveMobile.classList.remove("noActive");
        menuCardDessertActiveMobile.classList.toggle("noActive");
        menuCardDessertActiveMobile.classList.toggle("activ");
      console.log('Элемент Dessert класс "menuActive"');
    } 

    console.log("ClickUpdate");
}

function functionClickCoffee() {
    menuCardsCoffee.classList.remove("noActive");
    menuCardsCoffee.classList.add("menuActive");
    menuCardsTea.classList.remove("activ");
    menuCardsTea.classList.add("noActive");
    menuCardsDessert.classList.remove("menuActive");
    menuCardsDessert.classList.add("noActive");

    BtnUpdate.classList.remove("noActive");
    
    console.log("ClickCoffee");
    
}

functionClickCoffee();

function functionClickTea() {
    menuCardsCoffee.classList.remove("menuActive");
    menuCardsCoffee.classList.add("noActive");
    menuCardsTea.classList.remove("noActive");
    menuCardsTea.classList.add("activ");
    menuCardsDessert.classList.remove("menuActive");
    menuCardsDessert.classList.add("noActive");

    BtnUpdate.classList.add("noActive");
    
    console.log("ClickTea");
    
}

function functionClickDessert() {
    menuCardsCoffee.classList.remove("menuActive");
    menuCardsTea.classList.remove("activ");
    menuCardsCoffee.classList.add("noActive");
    menuCardsTea.classList.add("noActive");
    menuCardsDessert.classList.remove("noActive");
    menuCardsDessert.classList.add("menuActive");

    BtnUpdate.classList.remove("noActive");
    
    console.log("ClickDessert");
    
}


