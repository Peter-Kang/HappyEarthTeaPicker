function SwitchTeaPool(selection, index) {
  if (index == 0) {
    CURRENT_PRODUCT = ALL_PRODUCTS;
  } else {
    CURRENT_PRODUCT = createNewTeaNames(TEA_ENUMS[index]);
  }
  selection.parentNode.parentNode.host.setAttribute("category", index);
  category = index;
}

function createNewTeaNames(currentProductID) {
  let result = [];
  const listOfIndices = TEA_CATEGORIES[currentProductID];
  listOfIndices.forEach((index) => result.push(ALL_PRODUCTS[index]));
  return result;
}
