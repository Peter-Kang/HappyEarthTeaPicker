function catImageInteraction(catbutton) {
  const category = catbutton.querySelector("cat-img").getAttribute("category");
  let cat_text = ""; // default it to clear
  if (category === "5") {
    //xexe
    //check if xexe is home 1 in 24
    const isHome = Math.floor(Math.random() * 24) != 0;
    if (isHome) {
      cat_text = "xexe";
    }
  } else if (category === "7") {
    //bakal
    const appears = Math.floor(Math.random() * 5) == 0; // 20% chance he appears
    if (appears) {
      cat_text = "bacal";
    }
  } else {
    cat_text = ""; //clear if there was anything there before
  }
  catbutton.querySelector("cat-img").setAttribute("cat", cat_text);
}
