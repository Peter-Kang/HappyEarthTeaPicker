/* Move to a data context */
function initializeList(teaNames) {
  ALL_PRODUCTS.forEach(
    (item) =>
      (teaNames.innerHTML += `<p style="display:block">${item.title}</p>`)
  );
}

async function initialize(cat, teaPool) {
  if (ALL_PRODUCTS == null) {
    const result = await getAllProducts();
    sortProducts(result);
    CURRENT_PRODUCT = ALL_PRODUCTS;
    //Enable button
    cat.shadowRoot.querySelector("button").removeAttribute("disabled");
    //populate the text area
    initializeList(
      teaPool.shadowRoot
        .querySelector("tea-pool")
        .shadowRoot.getElementById("teaNames")
    );
  }
}
