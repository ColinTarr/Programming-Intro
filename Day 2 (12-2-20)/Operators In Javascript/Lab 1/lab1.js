// Javascript Document
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var hoursInADay = 24;
var daysInAYear = 365;

var secondsInAnHour = secondsInAMinute * minutesInAnHour;
document.write("The number of seconds in an hour are " + secondsInAnHour);
document.write("<br>");

var secondsInADay = secondsInAnHour * hoursInADay;
document.write("The number of seconds in a day are " + secondsInADay);
document.write("<br>")

var secondsInAYear = secondsInADay * daysInAYear;
document.write("The number of seconds in a year are " + secondsInAYear);
document.write("<br>")
document.write("<br>")
document.write("Created by Colin Tarr")