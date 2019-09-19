var buttonColours = ["blue", "red", "green", "yellow"];
var gamePattern= [];
var userClickedPattern = [];
nextSequence();
animatePress();

function nextSequence() {
var randomNumber = Math.floor(Math.random() *4)
console.log(randomNumber);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
console.log(gamePattern);
}
$("#"+gamePattern).on("click",function(){
$("#"+gamePattern).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
var audio = new Audio("sounds/" + gamePattern + ".mp3");
audio.play();

});
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      console.log(userClickedPattern);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
}
