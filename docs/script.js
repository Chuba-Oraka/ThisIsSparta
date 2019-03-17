var startTime = Date.now();
var scoreToEnd = 5
var currentScore = 0

function clickSquare() {
  document.querySelector("#square").style.left = (Math.random() * (window.innerWidth - 200)) +"px";
  document.querySelector("#square").style.top = (Math.random() * (window.innerHeight  - 200)) +"px";
  
  // update currentScore
  currentScore = currentScore + 1;
  document.querySelector("#score").innerHTML = currentScore

  // should the game end?

  // if game is to end
  if (currentScore === scoreToEnd) {
    // end the game!
    console.log("end the game")
    var totalTime = Date.now() - startTime
    
    var endGameText = "Nice! It only took you " + totalTime + " milliseconds to finish the game!"
    currentScore = 0
    alert(endGameText + " MADNESS!!!")
  } else {
    // keep the game going
    console.log("keep it going")
  }
}
