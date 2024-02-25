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

      // document.getElementById("Card1Coffee").addEventListener('click', clickCard1Coffee);
      // document.getElementById("Card2Coffee").addEventListener('click', clickCard2Coffee);
      // document.getElementById("Card3Coffee").addEventListener('click', clickCard3Coffee);
      // document.getElementById("Card4Coffee").addEventListener('click', clickCard4Coffee);
      // document.getElementById("Card5Coffee").addEventListener('click', clickCard5Coffee);
      // document.getElementById("Card6Coffee").addEventListener('click', clickCard6Coffee);
      // document.getElementById("Card7Coffee").addEventListener('click', clickCard7Coffee);
      // document.getElementById("Card8Coffee").addEventListener('click', clickCard8Coffee);

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

      
      // function clickCard1Coffee() {
      //   CardOpen = 0;
      //   renderModal();
      //  }
      // function clickCard2Coffee() {
      //   CardOpen = 1;
      //   renderModal();
      // }
      // function clickCard3Coffee() {
      //   CardOpen = 2;
      //   renderModal();
      // }
      // function clickCard4Coffee() {
      //   CardOpen = 3;
      //   renderModal();

      // }
      // function clickCard5Coffee() {
      //   CardOpen = 4;
      //   renderModal();
      // }
      // function clickCard6Coffee() {
      //   CardOpen = 5;
      //   renderModal();
      // }
      // function clickCard7Coffee() {
      //   CardOpen = 6;
      //   renderModal();
      // }
      // function clickCard8Coffee() {
      //   CardOpen = 7;
      //   renderModal();
      // }
    
    function renderModal (){
      card = respjson[CardOpen];
      document.getElementById("modal").classList.add("open");
      document.getElementById("price").innerHTML = "$" + card.price;
    } 
  
}

go();