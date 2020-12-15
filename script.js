
let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", switch_to_dark);

function switch_to_dark(event){
  document.body.classList.toggle("dark");
}

