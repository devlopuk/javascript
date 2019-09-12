var drumloop = document.querySelectorAll(".drum").length;
var i = 0;

while (i<drumloop){
document.querySelectorAll(".drum")[i].addEventListener("click",itsClicked);
  i++;
}

function itsClicked()
{
  alert("i got clicked");
}
