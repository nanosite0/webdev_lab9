function init(){

  const enter = document.getElementById("entrybutton");
  var entry = document.getElementById("entryinput");
  
  enter.addEventListener("click", entryClick);
  
  function entryClick(){
    alert("Leonardo: " + entry.value);
  }
}

window.addEventListener('load', init);