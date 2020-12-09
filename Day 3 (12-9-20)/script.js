document.getElementById("pageTitle").innerHTML = "Welcome to Ninjaing 101"

// Calculator

// numbOne = document.getElementById("numberOne").value;


function theAnswer() {
    numbOne = parseFloat(document.getElementById("numberOne").value);
    numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML =
        "The Correct Answer Is: " + parseFloat(numbOne + numbTwo);
};

function mathSubtraction() {
    numbOne = parseFloat(document.getElementById("numberOne").value);
    numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML =
        "The Correct Answer Is: " + parseFloat(numbOne - numbTwo);
};

function mathMuliplication() {
    numbOne = parseFloat(document.getElementById("numberOne").value);
    numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML =
        "The Correct Answer Is: " + parseFloat(numbOne * numbTwo);
};

function mathDivision() {
    numbOne = parseFloat(document.getElementById("numberOne").value);
    numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML =
        "The Correct Answer Is: " + parseFloat(numbOne / numbTwo);
};