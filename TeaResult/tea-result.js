function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
  }
  
  function jumpToCat()
  {
    const cat_button = document.getElementById("Cat")
    //Set the current scroll to the button
    const cat_button_pos = findPosition(cat_button );
    window.focus();
    window.scrollTo(0,cat_button_pos);
  }