//#region Random Number
function randomNumberGenerator(randomNumber) {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("The random number is: " + randomNumber);
    return randomNumber;
}
randomNumber = randomNumberGenerator();
//#endregion
// randomNumberGenerator(randomNumber);


// x = document.getElementById("input").value;


var allGuesses = [];
var playerScore = 0;
var playerTurns = 20;

function myFunction() {
    var playerGuesses;
    playerGuesses = document.getElementById("input").value;


    allGuesses.push(" " + playerGuesses);
    document.getElementById("numbersGuessed").innerHTML = allGuesses;
    console.log(allGuesses);

    if (playerGuesses < 1 && playerGuesses > 10) {
        text = "Hey there buddy, enter a number between 1 AND 10 please.";
        document.getElementById("response").innerHTML = text;
    } else if (playerGuesses == randomNumber) {
        text = "Wow, you're a good guesser."
        playerScore = playerScore + 5;
        document.getElementById("response").innerHTML = text;
        document.getElementById("answer").innerHTML = "The number I chose was " + randomNumber;
        document.getElementById("yourGuess").innerHTML = "You chose " + playerGuesses;
        playerTurns--;
        console.log("playerTurns= " + playerTurns);
    } else {
        text = "Nope, try again."
        playerScore = playerScore - 2;
        document.getElementById("response").innerHTML = text;
        document.getElementById("answer").innerHTML = "The number I chose was " + randomNumber;
        document.getElementById("yourGuess").innerHTML = "You chose " + playerGuesses;
        playerTurns--;
    }

    document.getElementById("playerScore").innerHTML = playerScore;

};

// playerTurns--;
// document.getElementById(playerturns).innerHTML = "Turns lefts: " + playerTurns;

var highscore = localStorage.getItem("highscore");

if (highscore !== null) {
    if (playerScore > highscore) {
        localStorage.setItem("highscore", playerScore);
    }
} else {
    localStorage.setItem("highscore", playerScore);
}

document.getElementById("highscore").innerHTML = "Highscore: " + highscore;

function newGame() {
    playerGuesses = []
    playerScore = 0;
    playerTurns = 20;

}