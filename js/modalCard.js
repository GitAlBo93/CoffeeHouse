
 let responsed = 
 fetch('json/products.json')
  .then(response => response.json())
  .then(data => {
    processData(data);
        function processData(data) {
            productsCard = data;
            // console.log(productsCard); // данные должны быть доступны здесь
            // дальнейшие действия с globalData
        }// вызовем функцию processData с полученными данными
  });
let productsCard;

// объявляем глобальную переменную 
console.log(productsCard);