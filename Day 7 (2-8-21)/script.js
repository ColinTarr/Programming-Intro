// var x = 10;
// var y = 8;

// if (x < y) {
//     document.getElementById("booleans").innerHTML = "True";
//     alert(x + " is greater than " + y);
// } else {
//     document.getElementById("booleans").innerHTML = "False";
//     alert(x + " is less than " + y);
// }

// let teacher = "Captain Awesome"
// let student1Grade = 4.0;
// if (student1Grade >= 3.5 || teacher == "Captain Awesome") {
//     document.getElementById("booleans").innerHTML = "Student gets three slices of pizza"
// } else if (student1Grade >= 3.0) {
//     document.getElementById("booleans").innerHTML = "Student gets two slices of pizza"
// } else if (student1Grade >= 2.0) {
//     document.getElementById("booleans").innerHTML = "Student gets one slice of pizza"
// } else if (student1Grade >= 1.0) {
//     document.getElementById("booleans").innerHTML = "Student gets zero slices of pizza"
// };

function Player(playerNumber, playerName, playerType, playerClass, playerStartingHealth, playerWeapon) {
    this.playerNumber = playerNumber;
    this.playerName = playerName;
    this.playerType = playerType;
    this.playerClass = playerClass;
    this.playerStartingHealth = playerStartingHealth;
    this.playerWeapon = playerWeapon;
}

let pTypes = ["Warrior", "Mage", "Shamam", "Rogue", "Priest", "Paladin"];
let pClasses = ["Human", "Orc", "Elf", "Tauren", "Gnome"];
let pWeapons = ["Staff", "Dagger", "Sword", "Hammer", "Wand", "Bow & Arrow", "Blunderbuss"];

let player1 = new Player(1, "NinjaCocoa", pTypes[3], pClasses[2], 100, pWeapons[5]);
let player2 = new Player(2, "Nubomidus", pTypes[4], pClasses[3], 140, pWeapons[0]);

document.getElementById("response").innerHTML = player1.playerNumber + " " + player1.playerName + " " + player1.playerType + " " + player1.playerClass + " " + player1.playerStartingHealth + " " + player1.playerWeapon;

player1RemainingHealth = player1.playerStartingHealth - 0;

if (player1RemainingHealth >= player1.playerStartingHealth) {
    document.getElementById("response1").innerHTML = player1.playerName + " dodged the strike! " + player1.playerName + "'s health is still at " + player1RemainingHealth + ".";
} else {
    document.getElementById("response1").innerHTML = player1.playerName + " took a vital blow. Ouch! " + player1.playerName + "'s health has been reduced to: " + player1RemainingHealth + ".";
}