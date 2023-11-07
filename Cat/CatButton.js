//Format the html body
function filterBodyHtmlString(bodyHtml) {
  return bodyHtml
    .replace(/(<img.*">)+/g, "")
    .replace(/(<iframe.*iframe>)+/g, "");
}

function setTeaToDisplay(button, teaPicked) {
  //Set tea title
  button.getRootNode().host.shadowRoot.getElementById("TeaTitle").innerHTML =
    teaPicked.title;
  //Set the image
  button.getRootNode().host.shadowRoot.getElementById("Img").innerHTML =
    "<img width='15%' src='" +
    JSON.stringify(teaPicked.images[0].src).replace('"', "") +
    "/resize=width:200'></img>";
  //Set the description
  button.getRootNode().host.shadowRoot.getElementById("TeaText").innerHTML =
    filterBodyHtmlString(teaPicked.body_html).trim();
  //make visible
  button.getRootNode().host.shadowRoot.getElementById("card").style.visibility =
    "visible";
}

//Randomly pick a product
function getRandomProduct(button) {
  // Randomly select a tea
  const teaPicked = RandomlySelectTeaFromArray(CURRENT_PRODUCT);
  // Set tea displayed
  setTeaToDisplay(button, teaPicked);
}
