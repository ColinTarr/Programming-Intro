//#region Random Number
function randomNumberGenerator(randomNumber) {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("The random number is: " + randomNumber);
}
randomNumber = randomNumberGenerator();
//#endregion


x = document.getElementById("input").value;


var allGuesses = [];
var playerScore = 0;

function myFunction() {
    var playerGuesses;
    playerGuesses = document.getElementById("input").value;
    document.getElementById("playerScore").innerHTML = playerScore;

    allGuesses.push(" " + playerGuesses);
    document.getElementById("numbersGuessed").innerHTML = allGuesses;
    console.log(allGuesses);

    if (x <= 1 || x >= 10) {
        text = "Hey there buddy, enter a number between 1 AND 10 please.";
        document.getElementById("response").innerHTML = text;
    } else if (x == randomNumber) {
        text = "Wow, you're a good guesser."
        playerScore = playerScore + 5;
        document.getElementById("response").innerHTML = text;
        document.getElementById("answer").innerHTML = "The number I chose was " + randomNumber;
        document.getElementById("yourGuess").innerHTML = "You chose " + x;
    } else {
        text = "Nope, try again."
        playerScore = playerScore - 2;
        document.getElementById("response").innerHTML = text;
        document.getElementById("answer").innerHTML = "The number I chose was " + randomNumber;
        document.getElementById("yourGuess").innerHTML = "You chose " + x;
    }

};