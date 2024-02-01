const MenuButton = document.querySelector("#headerMenuButton");
const MenuMobile = document.querySelector("#headerMenuMobile");
// const MenuButtonClose = document.querySelector("#headerMenuButtonClose");
const ItemFcoffee = document.querySelector("#menuItemFcoffee");
const ItemAbout = document.querySelector("#menuItemAbout");
const ItemMobile = document.querySelector("#menuItemMobile");
const ItemContacts = document.querySelector("#menuItemContacts");
const body = document.body;

// function selectItem(){
//   if 
// }

function functionClickButton() {
  MenuButton.classList.toggle("active");
  MenuMobile.classList.toggle("open");
  body.classList.toggle("noscroll");
  console.log("ClickBottonOpen");
}



MenuButton.addEventListener('click',functionClickButton);
MenuItem.addEventListener('click',functionClickButtonMenuClose);



function functionClickButtonMenuClose(){
  MenuButton.classList.remove("active");
  MenuMobile.classList.remove("open");
  body.classList.remove("noscroll");
  console.log("CloseButtonMenu");
}

// //const hamb = document.querySelector("#hamb");
// //const popup = document.querySelector("#popup");
// //const body = document.body;
// // Клонируем меню, чтобы задать свои стили для мобильной версии
// //const menuDesktop = document.querySelector("#menu").cloneNode(1);

// // При клике на иконку hamb вызываем ф-ию hambHandler
// MenuButton.addEventListener("click", hambHandler);



// // Выполняем действия при клике ..
// function hambHandler(e) {
//   e.preventDefault();
//   // Переключаем стили элементов при клике
//   MenuMobile.classList.toggle("open");
//   MenuButton.classList.toggle("active");
//   body.classList.toggle("noscroll");
//   //renderPopup();
// }

// // Здесь мы рендерим элементы в наш попап
// //function renderPopup() {
//  // popup.appendChild(menu);
// //}

// // Код для закрытия меню при нажатии на ссылку
// //const links = Array.from(menu.children);

// // Для каждого элемента меню при клике вызываем ф-ию
// // links.forEach((link) => {
// //   link.addEventListener("click", closeOnClick);
// // });

// // Закрытие попапа при клике на меню
// function closeOnClick() {
//     MenuMobile.classList.remove("open");
//     MenuButton.classList.remove("active");
//     body.classList.remove("noscroll");
// }