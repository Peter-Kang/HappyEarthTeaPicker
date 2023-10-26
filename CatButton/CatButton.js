//move to cat button
async function getRandomProduct(button) {
  // Randomly select a tea
  const randomIndex = Math.floor(Math.random() * ALL_PRODUCTS.length);
  let resultObject = ALL_PRODUCTS[randomIndex];
  let teaName = JSON.stringify(resultObject.title).replaceAll('"', "");
  console.info(randomIndex, teaName);
  const resultDisplay =
    teaName +
    resultObject.body_html +
    "<div'><img width='25%' src='" +
    JSON.stringify(resultObject.images[0].src).replace('"', "") +
    "/resize=width:200'></img></div>";
  document.getElementById("tempFill").innerHTML = resultDisplay;
}
