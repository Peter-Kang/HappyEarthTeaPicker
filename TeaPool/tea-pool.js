function ToggleTeaNames(teaPoolButton) {
  //couldn't move this into the script tag, is this a shadowDOM issue?
  const teaNames = teaPoolButton.parentNode.querySelector("#teaPool");
  const isInvisible = teaNames.style.display === "none";
  if (isInvisible) {
    teaNames.style.display = "block";
  } else {
    teaNames.style.display = "none";
  }
}

const saveLocalStorage = function ()
{
  const localStorageSet = new Set(JSON.parse(localStorage.getItem(this.getAttribute("currentExcludeProduct")))) || new Set();
  if(this.checked)
  {
    localStorageSet.delete(this.id);
  }
  else
  {
    localStorageSet.add(this.id);
  }
  localStorage.setItem(this.getAttribute("currentExcludeProduct"), JSON.stringify(Array.from(localStorageSet)))
}

function ResetButton(teaPool){
  const checkedBoxes = teaPool.querySelectorAll('input[type="checkbox"]')
  checkedBoxes.forEach((box) => {
    console.log(box.getAttribute("id"),box.checked)
    if(box.checked == false)
    {
      box.checked = true;
      box.dispatchEvent(new Event('change'))
    }
  })
  
}

function populateList(teaPool, currentPool, currentExcludeProduct) {
  //console.log("populating list"); this gets called twice?
  const teaNames = teaPool.shadowRoot.getElementById("teaNames");
  teaNames.innerHTML = "";
  if (currentPool) {

    const fromLocal = JSON.parse(localStorage.getItem(currentExcludeProduct)) || [];
    const excludeList = new Set( fromLocal);

    currentPool.forEach((item) => {
      
      //check box
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.style="display:inline-block; vertical-align: middle;";
        //adding the function to set when the check box is updated
      checkBox.addEventListener("change",saveLocalStorage);
      checkBox.setAttribute("currentExcludeProduct",currentExcludeProduct);
      checkBox.setAttribute("id",item.id);
      checkBox.setAttribute("name",item.id);
      if(!excludeList.has(String(item.id)))
      {
        checkBox.setAttribute("checked",true);
      }
      //title
      const newPTag = document.createElement("label");
      newPTag.innerHTML = '&nbsp;'+item.title;
      newPTag.setAttribute("for",item.id);
      //row
      const row = document.createElement("div");
      row.appendChild(checkBox);
      row.appendChild(newPTag);
      row.className = "TeaPoolRow"
      teaNames.appendChild(row);
    });
  }
  // look into this when you have time
  // it's making a call without the tea-brewed event
}
