var visible = false;

function togglemenu() {
   var elements = document.querySelectorAll(".nav a");
  if (visible) {
    visible = false;
     for (var i=0; i<elements.length;i++) {
      elements[i].style.display = "none";
    }
  }
  else {
    visible = true;
    for (i=0; i<elements.length;i++) {
      elements[i].style.display = "block";
    }

  }
}