let pet = {
    type: "Dog:",
    name: "Bolt",
    numLegs: 4,
    sayName: function() { return "The name of this dog is " + this.name + "." },
    sayLegs: function() { return "This dog has " + this.numLegs + " legs." },
};


console.log(pet.sayName());
console.log(pet.sayLegs());







document.getElementById('dog').innerHTML = pet.type;

document.getElementById('name').innerHTML = "The dog's name is " + pet.name + ".";

document.getElementById('numLegs').innerHTML = "the dog has " + pet.numLegs + " legs.";