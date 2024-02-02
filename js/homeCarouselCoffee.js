const ButtonLeft = document.querySelector("#ButtonLeftCarousel");
const ButtonRight = document.querySelector("#ButtonRightCarousel");
const FCMenu1 = document.querySelector("#FCMenu1");
const FCMenu2 = document.querySelector("#FCMenu2");
const FCMenu3 = document.querySelector("#FCMenu3");


ButtonLeft.addEventListener('click',functionLeftClick);
ButtonRight.addEventListener('click',functionRightClick);

function functionLeftClick() {
    FCMenu2.style.setProperty("right","0%");
    FCMenu2.classList.toggle("active");
    console.log("ClickLeft");
        let style = getComputedStyle(FCMenu3);
        let styleRight = style.right;
        if (styleRight != -1440) {
           console.log("Значение:", styleRight); 
        }
        else console.log("Меньше -100ppxx");
}

function functionRightClick() {
    FCMenu2.style.setProperty("right","-200%");
    FCMenu2.style.setProperty("transition","all 1s ease");
    console.log("ClickRight");
}

let style = getComputedStyle(FCMenu2);
console.log(style.right);