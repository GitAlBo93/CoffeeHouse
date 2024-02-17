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

const menuCardsCoffee = document.querySelector(".menuCardsCoffee");





BtnMenuCoffee.addEventListener('click', functionClickCoffee);
BtnMenuTea.addEventListener('click', functionClickTea);
BtnMenuDessert.addEventListener('click', functionClickDessert);
BtnUpdate.addEventListener('click', functionClickUpdate);

function functionClickUpdate(){
    const classCoffee = idCoffee.getAttribute('class');
    const classTea = idTea.getAttribute('class');
    const classDessert = idDessert.getAttribute('class');
    // if (classCoffee.split(' ').indexOf('activ') !== -1) {
        menuCardsCoffee.classList.toggle("activeUpdate");
        menuCardsCoffee.classList.remove("activ");
    //   }
    // menuCardsCoffee.classList.toggle("activeUpdate");
    // menuCardsDessert.classList.toggle("activeUpdate");
    // 
    // menuCardsDessert.classList.remove("activ");
    console.log(classCoffee);
    console.log(classTea);
    console.log(classDessert);
    console.log("ClickUpdate");
}

function functionClickCoffee() {
    menuCardsCoffee.classList.add("activ");
    menuCardsTea.classList.remove("activ");
    menuCardsDessert.classList.remove("activ");
    // const classCoffee = idCoffee.getAttribute('class');
    // const classTea = idTea.getAttribute('class');
    // const classDessert = idDessert.getAttribute('class');
    console.log("ClickCoffee");
    // console.log(classCoffee);
    // console.log(classTea);
    // console.log(classDessert);
}

function functionClickTea() {
    menuCardsCoffee.classList.remove("activ");
    menuCardsTea.classList.add("activ");
    menuCardsDessert.classList.remove("activ");
    console.log("ClickTea");
    // const classCoffee = idCoffee.getAttribute('class');
    // const classTea = idTea.getAttribute('class');
    // const classDessert = idDessert.getAttribute('class');
    // console.log(classCoffee);
    // console.log(classTea);
    // console.log(classDessert);
}

function functionClickDessert() {
    menuCardsCoffee.classList.remove("activ");
    menuCardsTea.classList.remove("activ");
    menuCardsDessert.classList.add("activ");
    console.log("ClickDessert");
    // const classCoffee = idCoffee.getAttribute('class');
    // const classTea = idTea.getAttribute('class');
    // const classDessert = idDessert.getAttribute('class');
    // console.log(classCoffee);
    // console.log(classTea);
    // console.log(classDessert);
}