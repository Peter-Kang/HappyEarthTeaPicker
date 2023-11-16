function ToggleTeaNames(teaPoolButton) {
  const teaNames = teaPoolButton.parentNode.querySelector("#teaNames");
  const isInvisible = teaNames.style.display === "none";
  console.log(isInvisible);
  if (isInvisible) {
    teaNames.style.display = "block";
  } else {
    teaNames.style.display = "none";
  }
}

function SwitchTeaPool(selection, index) {
  if (index == 0) {
    CURRENT_PRODUCT = ALL_PRODUCTS;
    //all products
    loadNewTeaNames(selection, ALL_PRODUCTS);
  } else {
    CURRENT_PRODUCT = createNewTeaNames(TEA_ENUMS[index]);
    loadNewTeaNames(selection, CURRENT_PRODUCT);
  }
}

function createNewTeaNames(currentProductID) {
  let result = [];
  const listOfIndices = TEA_CATEGORIES[currentProductID];
  listOfIndices.forEach((index) => result.push(ALL_PRODUCTS[index]));
  return result;
}

function loadNewTeaNames(selection, list) {
  const teaNames =
    selection.parentNode.parentNode.host.parentNode.querySelector("#teaNames");
  teaNames.innerHTML = "";
  list.forEach(
    (item) =>
      (teaNames.innerHTML += `<p style="display:block">${item.title}</p>`)
  );
}
