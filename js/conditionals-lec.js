"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
//     if(isAdmin){
//         // show admin navbar
//         // showAdminNavbar() <--- function
//     }

//TODO Together: Send a 20% off coupon if its users birthday
//     if(isBday){
//         // send 20% off coupon
//         // sendBirthdayEmail() <--- function
//     }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
//     var isRaining = true;
//     if(isRaining === true){
//             alert("It's raining!");
//         }
//
//     if(isRaining){
//         alert("It's raining!");
//     }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
//     var itemCost = 100;
//     var currentBalance = 200;
//
//     if(itemCost <= currentBalance){
//         alert("Thank you for your purchase!")
//     }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//     var numberOfLives = 2;
//     if(numberOfLives === 0){
//         alert("Sorry, game over");
//     }
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//     var weather = "snowing";
//     if(weather === "snowing"){
//         alert("It's Snowing!");
//     }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
//     var numberInput = 12;
//     if (numberInput > 10){
//         alert("True");
//     }




//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//     function lives(numberOfLives) {
//         if(numberOfLives === 0){
//             alert("Sorry, game over");
//         }
//     }
//
// console.log(lives(0));
//
// function weatherOutside(weather){
//         if(weather === "snowing"){
//             alert("It's Snowing!");
//         }
//     }
//
// console.log(weatherOutside("snowing"));
//
// function numba(numberInput) {
//         if (numberInput > 10){
//             alert("True");
//         }
//     }
//
// console.log(numba(12));


// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = true;
// if(isAdmin){
//     //show admin navbar
//     alert("User is an Admin")
// } else {
//     //show reg navbar
//     alert("user is a reg user. not admin")
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = false;
// if (isRainy) {
//     alert("It is raining");
// } else  {
//     alert("Have a nice day!");
// }



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//     var numberOfLives = 2;
//     if(numberOfLives === 0){
//         alert("Sorry, game over");
//     } else {
//         alert("Next Level!");
//     }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//     var weather = "snowing";
//     if(weather === "snowing"){
//         alert("It's Snowing!");
//     } else {
//         alert("Check back later for more details!");
//     }


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//     var numberInput = 12;
//     if (numberInput > 10){
//         alert("True");
//     } else {
//         alert("the number is less than 10");
//     }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// function checkIfGameIsOver(numberOfLives) {
//     if (numberOfLives === 0) {
//         alert("Sorry, game over");
//     } else {
//         alert("Next Level!");
//     }
// }
//
// console.log(checkIfGameIsOver(1));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
// function weatherOut(weather) {
//     if(weather === "snowing"){
//         alert("It's Snowing!");
//     } else {
//         alert("Check back later for more details!");
//     }
// }
//
// console.log(weatherOut("nah!"));


// SHOULD WE DELETE STUFF EXAMPLE
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
// if (weShouldDeleteStuff) {
//     // delete all the things...
// } else {
//     alert("Operation Canceled!");
// }



//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// var ageOver = confirm("Are you 13 or older?")
// function confirmAge(ageOver){
//     if(ageOver){
//         alert("you may proceed");
//     } else {
//         alert("nah! stay out!");
//     }
// }
//
// console.log(confirmAge(ageOver));

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
// if (weather === "snowing"){
//     alert("its snowing");
// } else if (weather === "raining"){
//     alert("its raining");
// } else if (weather === "sunny"){
//     alert("its sunny");
// } else{
//     alert("have a nice day");
// }
//TODO Together: refactor the above statement as a function
// function checkWeather(weather) {
//     if (weather === "snowing"){
//         return("its snowing");
//     } else if (weather === "raining"){
//         return("its raining");
//     } else if (weather === "sunny"){
//         return("its sunny");
//     } else{
//         return("have a nice day");
//     }
// }
//
// console.log(checkWeather("windy"));



// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
//



//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
// function trafficLight(lightColor) {
//     if(lightColor === "green"){
//         return("Honk!");
//     } else if (lightColor === "yellow") {
//         return("You can do it!");
//     } else {
//         return("HALT! WHO GOES THERE?!");
//     }
// }
//
// console.log(trafficLight("yellow"));


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are
// eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.
//
//     var userAge = 15;
//     var hasPermit = true;
//
//     if(userAge < 15){
//         alert("sorry no can do");
//     } else {
//         if(userAge === 15) {
//             alert("you can have a permit");
//         } else if (userAge >= 16 && hasPermit){
//             alert("you can have a license");
//         } else if (userAge >= 16 && !hasPermit){
//             alert("sorry you need a permit");
//         } else {
//             alert("please proceed to the front desk");
//         }
//     }















    // ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message);





//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
//var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice Day!";
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:

// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
//
//
//
//
//
//
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
// var weather = "rainy";
// switch (weather) {
//     case "rainy":
//         alert("its rainy");
//         break;
//     case "sunny":
//         alert("its sunny");
//         break;
//     case "snowy":
//         alert("its snowing");
//         break;
//     default:
//         alert("have a nice day!");
//         break;
// }
//




function checkWeather(weather) {
    var weatherMessage;

    switch (weather) {
        case "rainy":
            weatherMessage = ("its rainy");
            break;
        case "sunny":
            weatherMessage = ("its sunny");
            break;
        case "snowy":
            weatherMessage = ("its snowing");
            break;
        default:
            weatherMessage = ("have a nice day!");
            break;
    }
    return weatherMessage;
}

console.log(checkWeather("sunny"));


//TODO: Rewrite the intersection function from earlier as a switch statement.
function trafficLight(lightColor) {
    var lightMessage;

    switch (lightColor) {
        case "green":
            lightMessage = "Honk!";
            break;
        case "yellow":
            lightMessage = "You can do it!";
            break;
        default:
            lightMessage = "HALT! WHO GOES THERE?!";
            break;
    }
    return lightMessage;
}

console.log(trafficLight("yellow"));


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

