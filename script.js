
let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", switch_to_dark);

function switch_to_dark(event){
  document.body.classList.toggle("dark");
}

document.body.onkeyup = function(event){
  console.log(event.keyCode);
  if (event.keyCode == 68){
    // change class of body to darkmode
    document.body.classList.toggle("dark");
  }
}
