async function responsed (){
  const resp = await fetch('json/products.json')
  return resp.json();
}

async function go (){
  
      let respjson = await responsed();
      let CardOpen;
      let card;
      document.getElementById("modalBtnClose").addEventListener('click', clickCloseModal);
      function clickCloseModal() {
      document.getElementById("modal").classList.remove("open")
      }

      function ClickCoffeeCard(index) {
        return function() {
          CardOpen = index;
          renderModal();
        };
      }
      
      // Добавляем обработчики событий с использованием цикла
      for (let i = 1; i <= 8; i++) {
        const card = document.getElementById("Card" + i + "Coffee");
        card.addEventListener('click', ClickCoffeeCard(i - 1));
      }

    function renderModal (){
      card = respjson[CardOpen];
      document.getElementById("modal").classList.add("open");
      document.getElementById("price").innerHTML = "$" + card.price;
      document.getElementById("name").innerHTML = card.name;
      document.getElementById("description").innerHTML = card.description;
      // document.getElementById("name").innerHTML = card.additives[0].name;
    } 
  
}

go();