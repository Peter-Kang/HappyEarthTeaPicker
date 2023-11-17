function ToggleTeaNames(teaPoolButton) {
  const teaNames = teaPoolButton.parentNode.querySelector("#teaNames");
  const isInvisible = teaNames.style.display === "none";
  if (isInvisible) {
    teaNames.style.display = "block";
  } else {
    teaNames.style.display = "none";
  }
}

function CategoryChange(teaPool)
{
  console.log("Category Change ", CURRENT_PRODUCT);
  const teaNames = teaPool.querySelector("#teaNames");
  teaNames.innerHTML = "";
  CURRENT_PRODUCT.forEach(
    (item) =>
      (teaNames.innerHTML += `<p style="display:block">${item.title}</p>`)
  );
}