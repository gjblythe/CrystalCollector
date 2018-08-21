// enter variables here
var target; //19-200
var xOne = 0; //1-12
var xTwo = 0;
var xThree = 0;
var xFour = 0;
var wins = 0;
var losses = 0;
var overTarget = false;
var userScore = 0;

function resetGame() {
  (target = Math.floor(Math.random() * (120 - 19) + 19)),
    (xOne = Math.floor(Math.random() * 12 + 1)),
    (xTwo = Math.floor(Math.random() * 12 + 1)),
    (xThree = Math.floor(Math.random() * 12 + 1)),
    (xFour = Math.floor(Math.random() * 12 + 1)),
    (userScore = 0);
  $("#current").text(userScore);
  $("#target").text(target);
  console.log(target, xOne, xTwo, xThree, xFour);
}

function gameLogic() {
  if (userScore < target) {
    overTarget = false;
    return;
  } else if (userScore === target) {
    wins++;
    $("#wins").text(wins);
    resetGame();
  } else if (userScore >= target) {
    overTarget = true;
    losses++;

    $("#losses").text(losses);
    resetGame();
  }
}

$(document).ready(function() {
  console.log("ready");

  resetGame();
  $("#target").text(target);

  $("#xOne").on("click", function() {
    userScore = userScore + xOne;
    $("#current").text(userScore);
    gameLogic();
  });

  $("#xTwo").on("click", function() {
    userScore = userScore + xTwo;
    $("#current").text(userScore);
    gameLogic();
  });

  $("#xThree").on("click", function() {
    userScore = userScore + xThree;
    $("#current").text(userScore);

    gameLogic();
  });

  $("#xFour").on("click", function() {
    userScore = userScore + xFour;
    $("#current").text(userScore);

    gameLogic();
  });
});
