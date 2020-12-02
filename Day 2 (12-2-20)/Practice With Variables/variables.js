let a;
a = 5;
let b = 10;
answer = b + a;
console.log(answer)
    // document.writeln(a + b)

// There is a difference between ++answer and answer++. 
answer++;
answer++;
answer++;
answer++;
answer++;
++answer;


// ___________________________________________________________
let td = 6;
let fg = 1;
let safety = 2;
let extraPoint = 2;

var score = 0;

// These although are all the same.
score = score + td;
score += fg;

// Keyboard shortcut to duplicate rows: Shift + Alt + Up/Down
// Keyboard shortcut to select multiples: Ctrl+Shift+Alt+Up/Down
// ^^Or Ctrl+HoldScrollWheel+Drag   
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;
score += fg;



document.getElementById("theAnswer").innerHTML = score;


// Both double and single quotation marks work for strings.
var myString = 'It doesn\'t look like it\'s walking weather.'
document.getElementById("paragraph").innerHTML = myString;