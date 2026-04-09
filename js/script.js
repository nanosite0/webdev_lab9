function init(){

  const enter = document.getElementById("entrybutton");
  var entry = document.getElementById("entryinput");
  var h2 = document.getElementById("textoutput");
  
  enter.addEventListener("click", entryClick);
  
  function entryClick(){
    h2.textContent = entry.value;
    alert("Leonardo: " + entry.value);
  }
}

window.addEventListener('load', init);