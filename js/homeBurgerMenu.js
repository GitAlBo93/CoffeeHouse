const MenuButton = document.querySelector("#headerMenuButton");
const MenuMobile = document.querySelector("#headerMenuMobile");
const body = document.body;




function functionClickButton() {
  MenuButton.classList.toggle("active");
  MenuMobile.classList.toggle("open");
  body.classList.toggle("noscroll");
  console.log("ClickBottonOpen");
}



MenuButton.addEventListener('click',functionClickButton);
// MenuItem.addEventListener('click',functionClickButtonMenuClose);

const links = Array.from(MenuMobile.children);

links.forEach((link) => {
link.addEventListener("click", functionClickButtonMenuClose);
console.log("Вызван клик по дочернему элементу");
})


function functionClickButtonMenuClose(){
  MenuButton.classList.remove("active");
  MenuMobile.classList.remove("open");
  body.classList.remove("noscroll");
  console.log("CloseButtonMenu");
}
