"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */



// var askInput = confirm("Would you like to enter a number?");

//
// function askForNum(askInput) {
//     if (askInput === false) {
//         alert("Thank you!");
//     } else {
//         if (askInput === true) {
//             var numInput = Number(prompt("Type a number: "));
//
//
//             if (isNaN(numInput)) {
//                 alert("Not a number");
//             }
//             // Check to see if even
//             else if (numInput % 2 === 0) {
//                 alert("is even");
//                 alert("your number + 100 is: " + (numInput + 100));
//                 if (numInput < 0) {
//                     alert("your number is Negative");
//                 } else {
//                     alert("you number is Positive");
//                 }
//             }
//             // It's odd
//             else {
//                 alert("is odd");
//                 alert("your number + 100 is: " + (numInput + 100));
//                 if (numInput < 0) {
//                     alert("Number is Negtive");
//                 } else {
//                     alert("Number is Positive");
//                 }
//             }
//         }
//     }
// }
//
// console.log(askForNum(askInput));

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that's related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if(color === 'blue') {
//         return "blue is the color of the sky";
//     } else if (color === 'red') {
//         return "Strawberries are red";
//     } else if (color === 'cyan') {
//         return "I don't know anything about cyan";
//     } else {
//         return "No valid color has been defined"
//     }
// }
//
// console.log(analyzeColor('red'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var colorMessage;
// function analyzeColor(color){
//     switch (color) {
//         case 'blue':
//         colorMessage = "blue is the color of the sky";
//             break;
//         case 'red':
//         colorMessage = "Strawberries are red";
//             break;
//         case 'cyan':
//         colorMessage = "I don't know anything about cyan";
//             break;
//         default:
//         colorMessage = "No valid color has been defined";
//     }
//     return colorMessage;
// }

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var colorInput = prompt("Type in a color:")
// var colorMessage;
// function analyzeColor(colorInput){
//     switch (colorInput) {
//         case 'blue':
//             colorMessage = "blue is the color of the sky";
//             break;
//         case 'red':
//             colorMessage = "Strawberries are red";
//             break;
//         case 'cyan':
//             colorMessage = "I don't know anything about cyan";
//             break;
//         default:
//             colorMessage = "No valid color has been defined";
//     }
//     return colorMessage;
// }
//
// console.log(analyzeColor(colorInput));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyRandom, totalAmount) {
    var message;
    switch (luckyRandom){
        case 0:
            message = "sorry, no discount";
            break;
        case 1:
            message = "Your total with disc is: $" + (totalAmount - ((10/100) * totalAmount));
            break;
        case 2:
            message = "Your total with disc is: $" + (totalAmount - ((25/100) * totalAmount));
            break;
        case 3:
            message = "Your total with disc is: $" + (totalAmount - ((35/100) * totalAmount));
            break;
        case 4:
            message = "Your total with disc is: $" + (totalAmount - ((50/100) * totalAmount));
            break;
        case 5:
            message = "*BING BING BING* WE HAVE A LUCKY WINNERRR!!! All FREE 99!!!"
            break;
        default:
            message = "Your total is: $" + totalAmount;
            break;
    }
        return message;

}

console.log(calculateTotal(3, 350));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill,
 *
 * then use your `calculateTotal` function and
 *
 * alerts to display to the user what their lucky number was,
 * what their price before the discount was,
 * and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var promptBill = parseFloat(prompt("What is your total bill?"));

alert("Your lucky number is: " + luckyNumber);
alert("Your price before your discount was: $" + promptBill);
alert(calculateTotal(luckyNumber, promptBill));
alert("Whoop! Whoop!");