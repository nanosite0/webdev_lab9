function init(){
//add your javascript between these two lines of code
  console.log("Test");
  var entry = document.getElementById("entrybutton");
  
  entry.addEventListener("click", entryClick);
  
  function entryClick(){
  alert("message");
  }
}

window.addEventListener('load', init);