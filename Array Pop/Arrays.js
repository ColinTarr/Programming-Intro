//#region Random Number Generator
function randomNumberGenerator(randomNumber) {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("The random number is: " + randomNumber);
    document.getElementById("theRandomNumber").innerHTML = "The random number is: " + randomNumber;
    return randomNumber;
}
randomNumber = randomNumberGenerator();
//#endregion
var allGuesses = [];
var playerScore = 0;

function myFunction() {
    var playerGuesses;
    playerGuesses = document.getElementById("input").value;

    if (allGuesses.includes(playerGuesses)) {
        document.getElementById("duplicateNumber").innerHTML = "Yo, you already guessed that number dumb dumb.";
        console.log("!!!");
        allGuesses.pop();
    } else {
        document.getElementById("duplicateNumber").innerHTML = "Negative";
    }



    if (playerGuesses == randomNumber) {
        var text = "Score is going up!";
        document.getElementById("message").innerHTML = text;
        playerScore = playerScore + 5;

    } else {
        playerScore = playerScore - 2;
        var text = "Oh no... Score is going down.";
        document.getElementById("message").innerHTML = text;

    }
    document.getElementById("playerScore").innerHTML = playerScore;

    allGuesses.push(" " + playerGuesses);
    document.getElementById("numbersGuessed").innerHTML = allGuesses;
    console.log(allGuesses);
};