function catImageInteraction(catbutton) {
  const category = catbutton.querySelector("cat-img").getAttribute("category");
  let cat_text = "";
  if (category === "5") {
    //xexe
    //check if xexe is home 1 in 24
    const isHome = Math.floor(Math.random() * 24) != 0;
    if (isHome) {
      cat_text = "xexe";
    }
  } else if (category === "7") {
    //bakal
  } else {
    cat_text = "";
  }
  catbutton.querySelector("cat-img").setAttribute("cat", cat_text);
}
