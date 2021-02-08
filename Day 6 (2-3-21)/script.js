var cars = ["Chevy", " Ford", " Saab", " Yugo"];
document.getElementById("response").innerHTML = cars[2];

cars[2] = " Dodge"
document.getElementById("response").innerHTML = cars[2];
document.getElementById("response1").innerHTML = cars;

let person = {
    firstName: "Handy",
    lastName: "Manny",
    age: 30,
    height: 2,
};

document.getElementById("objects").innerHTML = person["firstName"];