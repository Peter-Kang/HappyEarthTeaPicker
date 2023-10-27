//Format the html body
function filterBodyHtmlString(bodyHtml) {
  return bodyHtml
    .replace(/(<img.*">)+/g, "")
    .replace(/(<iframe.*iframe>)+/g, "");
}

//Randomly pick a product
function getRandomProduct(button) {
  // Randomly select a tea
  const randomIndex = Math.floor(Math.random() * ALL_PRODUCTS.length);
  let resultObject = ALL_PRODUCTS[randomIndex];
  const teaName = JSON.stringify(resultObject.title).replaceAll('"', "");
  console.info(randomIndex, teaName);

  //Set tea title
  button.getRootNode().host.shadowRoot.getElementById("TeaTitle").innerHTML =
    teaName;
  //Set the image
  button.getRootNode().host.shadowRoot.getElementById("Img").innerHTML =
    "<img width='15%' src='" +
    JSON.stringify(resultObject.images[0].src).replace('"', "") +
    "/resize=width:200'></img>";
  //Set the description
  button.getRootNode().host.shadowRoot.getElementById("TeaText").innerHTML =
    filterBodyHtmlString(resultObject.body_html).trim();
}
