// console.log('Hello from external JavaScript');
//
// alert("Welcome to my Web");
//
// var userInput = prompt('Favorite Color?');
// console.log('Great, ' + userInput + ' is my favorite color too!');



// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.

var littleMermaid = prompt("How many days do you want to rent Little Mermaid?");
var brotherBear = prompt("How many days do you want to rent Brother Bear?");
var hercules = prompt("How many days do you want to rent Hercules?");

alert("Your total is: " + ((littleMermaid * 3) + (brotherBear * 3) + (hercules * 3)) );



var googleRate = prompt("What is the rate?");
var amaRate = prompt("What is the rate?");
var fbRate = prompt("What is the rate?");

var googleMoney = prompt("How many hours did you work?");
var amaMoney = prompt("How many hours did you work?");
var fbMoney = prompt("How many hours did you work?");
alert("Your take home amount is: " + ((amaMoney * amaRate)+ (fbMoney * fbRate) + (googleMoney * googleRate)));
