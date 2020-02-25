console.log('Hello from external JavaScript');

alert("Welcome to my Website");

var userInput = prompt('Favorite Color?');
alert('Great, ' + userInput + ' is my favorite color too!');




var littleMermaid = Number(prompt("How many days do you want to rent Little Mermaid?"));
var brotherBear = Number(prompt("How many days do you want to rent Brother Bear?"));
var hercules = Number(prompt("How many days do you want to rent Hercules?"));
var rentalRate = Number(prompt("What is the rental rate?"));

alert("Your total is: " + ((littleMermaid + brotherBear + hercules) * rentalRate) );



var googleRate = Number(prompt("What is the rate for Google?"));
var googleMoney = Number(prompt("How many hours did you work?"));
var amaRate = Number(prompt("What is the rate for Amazon?"));
var amaMoney = Number(prompt("How many hours did you work?"));
var fbRate = Number(prompt("What is the rate for FB?"));
var fbMoney = Number(prompt("How many hours did you work?"));

alert("Your take home amount is: " + ((amaMoney * amaRate) + (fbMoney * fbRate) + (googleMoney * googleRate)));




var classAt8AM = confirm("Schedules do not conflict");
var currentClassSize = confirm("Class is not full");
var canRegister = (currentClassSize && classAt8AM);
alert("Student can enroll: " + canRegister);


var hasKrogerCard = confirm ("Are you a premium member?");
var cartSize = Number(prompt("How many items in your cart?"));
var offerValid = confirm("is offer still valid?");
var canHaveDisc = offerValid && (hasKrogerCard || cartSize > 2);

alert(canHaveDisc);