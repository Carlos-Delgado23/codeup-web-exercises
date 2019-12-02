// console.log('Hello from external JavaScript');
//
// alert("Welcome to my Web");
//
// var userInput = prompt('Favorite Color?');
// console.log('Great, ' + userInput + ' is my favorite color too!');



// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.

var littleMermaid = "Little Mermaid";
var brotherBear = "Brother Bear";
var hercules = "Hercules";
var promptMovie = prompt("Which movie do you want to rent?" + ": " + littleMermaid + ", " + brotherBear + ", " + hercules);


function watchMovie(movieInput){

    var days = prompt("How many days?", "0");

    if (movieInput === "Little Mermaid"){
        return alert("Your total is: $" + (days * 3) + " for Little Mermaid");
    }
    else if (movieInput === "Brother Bear"){
        return alert("Your total is: $" + (days * 3) + " for Brother Bear");
    }
    else if (movieInput === "Hercules"){
        return alert("Your total is: $" + (days * 3) + " for Hercules");
    } else {
        return alert("Thank you! Come again!");
    }
}

watchMovie(promptMovie);
