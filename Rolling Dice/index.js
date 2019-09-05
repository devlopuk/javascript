
var rd1= Math.floor(Math.random() * 6)+1;
var rd2= Math.floor(Math.random() * 6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+rd1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+rd2+".png");

if (rd1 > rd2) {
document.querySelector("H1").textContent = 'Player 1 Wins!';
} else if (rd1 ===  rd2) {
document.querySelector("H1").textContent = "It's a Draw!";
} else {
document.querySelector("H1").textContent = 'Player 2 Wins!';
}
