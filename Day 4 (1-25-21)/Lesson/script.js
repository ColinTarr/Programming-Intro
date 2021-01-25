let character = {
    type: "Black Knight",
    numLegs: 2,
    numArms: 2,
    quote: function() { return "Tis but a scratch." }
};

console.log(character.numArms);
console.log(character.numLegs);
console.log(character.type);

character.numArms =
    character.numArms - 1;
console.log("You have " + character.numArms + " arm(s). " + character.quote());

character.numArms =
    character.numArms - 1;
console.log("You have " + character.numArms + " arm(s). " + character.quote());

character.numLegs =
    character.numLegs - 1;
console.log("You have " + character.numLegs + " leg(s). " + character.quote());

character.numLegs =
    character.numLegs - 1;
console.log("You have " + character.numLegs + " leg(s). " + character.quote());


document.getElementById('demo').innerHTML = character.type;