function ToggleTeaNames(teaPoolButton) {
  //couldn't move this into the script tag, is this a shadowDOM issue?
  const teaNames = teaPoolButton.parentNode.querySelector("#teaNames");
  const isInvisible = teaNames.style.display === "none";
  if (isInvisible) {
    teaNames.style.display = "block";
  } else {
    teaNames.style.display = "none";
  }
}

function populateList(teaPool, currentPool) {
  //console.log("populating list"); this gets called twice?
  if (currentPool) {
    const teaNames = teaPool.shadowRoot.getElementById("teaNames");
    teaNames.innerHTML = "";
    currentPool.forEach((item) => {
      const newPTag = document.createElement("p");
      newPTag.innerHTML = item.title;
      teaNames.appendChild(newPTag);
    });
  }
  // look into this when you have time
  // it's making a call without the tea-brewed event
}
