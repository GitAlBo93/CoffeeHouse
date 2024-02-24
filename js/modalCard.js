async function responsed (){
  const resp = await fetch('json/products.json')
  return resp.json();
}

async function go (){
  let respjson = await responsed();
   let card1 = respjson[4];
  // let card2 = respjson[1];
  // let card3 = respjson[2];
  // let card4 = respjson[3];
  // let card5 = respjson[4];

  let price = card1.price;
  document.getElementById("price").innerHTML = "$" + price;
}

go();