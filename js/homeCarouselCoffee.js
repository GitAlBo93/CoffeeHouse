const ButtonLeft = document.querySelector("#ButtonLeftCarousel");
const ButtonRight = document.querySelector("#ButtonRightCarousel");
const ContFCM = document.querySelector('.ContFCMenuCarousel');
const FCMenu1 = document.querySelector("#FCMenu1");
const FCMenu2 = document.querySelector("#FCMenu2");
const FCMenu3 = document.querySelector("#FCMenu3");
const FCLine1 = document.querySelector(".FCLine_1");
const FCLine2 = document.querySelector(".FCLine_2");
const FCLine3 = document.querySelector(".FCLine_3");
let position=0;

// let style = getComputedStyle(FCMenu1);
// let position = style.right;
// console.log(position);


ButtonLeft.addEventListener('click',functionLeftClick);
ButtonRight.addEventListener('click',functionRightClick);

function functionLeftClick(){
    position+=60;
    ContFCM.style.right = position + '%';
}

// function functionLeftClick(){
    
//     position=position+100;
//         // if (position<=0) {
//         //     FCMenu1.style.right = 0 + '%';
//         //     FCMenu2.style.right = -100 + '%';
//         //     FCMenu3.style.right = -200 + '%';
//         // }
//         // if (position==100) {
//         //     FCMenu1.style.right = 100 + '%';
//         //     FCMenu2.style.right = 0 + '%';
//         //     FCMenu3.style.right = -100 + '%';
//         // }
//         // if (position==200) {
//         //     FCMenu1.style.right = 200 + '%';
//         //     FCMenu2.style.right = 100 + '%';
//         //     FCMenu3.style.right = 0 + '%';
//         // }
//         // if (position>200) {
//         //     position=0;

//         // }
//         console.log(position);
//     console.log (FCMenu1.style.right);
// }

// function functionRightClick(){
//     position=position-100;
        
//             if (position>0) {
//                 FCMenu1.style.right = 0 + '%';
//                 FCMenu2.style.right = -100 + '%';
//                 FCMenu3.style.right = -200 + '%';
//             }
//             if (position==100) {
//                 FCMenu1.style.right = 100 + '%';
//                 FCMenu2.style.right = 0 + '%';
//                 FCMenu3.style.right = -100 + '%';
//             }
//             if (position==200) {
//                 FCMenu1.style.right = 200 + '%';
//                 FCMenu2.style.right = 100 + '%';
//                 FCMenu3.style.right = 0 + '%';
//         }
//         // if (position<200) {
//         //     position=0;

//         // }
//     console.log (FCMenu1.style.right);
// }
// function functionRightClick(){
//     positionFCM2=positionFCM2-200;
//     FCMenu2.style.right = positionFCM2 + '%';
//     console.log (positionFCM2);
// }
// function functionLeftClick() {
//     FCMenu2.style.setProperty("right","0%");
//     FCMenu2.classList.toggle("active");
//     console.log("ClickLeft");
//         let style = getComputedStyle(FCMenu3);
//         let styleRight = style.right;
//         if (styleRight != -1440) {
//            console.log("Значение:", styleRight); 
//         }
//         else console.log("Меньше -100ppxx");
// }

// function functionRightClick() {
//     FCMenu2.style.setProperty("right","-200%");
//     FCMenu2.style.setProperty("transition","all 1s ease");
//     console.log("ClickRight");
// }

// let style = getComputedStyle(FCMenu2);
// console.log(style.right);