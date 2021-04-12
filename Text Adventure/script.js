var myText = "Hello Wanderer, Welcome to Highmoon... What's your name?";
var myArray = myText.split("");
var loopTimer;

function frameLooper() {
    if (myArray.length > 0) {
        document.getElementById("intro").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('frameLooper()', 150);
}
frameLooper();

function myFunction() {
    var playerName;
    playerName = document.getElementById("name").value;

    console.log(playerName);
}