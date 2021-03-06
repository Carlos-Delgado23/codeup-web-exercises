"use strict";
//define a function names addFive that takes an input and adds 5,
// if the input is NOT numeric the function should return false.
function addFive(x) {
    x = parseInt(x); //taking the string "6" and returning 6 // "cat" ->
    x += 5;  //6+5->11 //  "cat" + 5 = "cat5"
    if (isNaN(x)) {      //line 9 and 10 is solving the "if the input is NOT numeric the function should return false."
        return false;
    } else {  // if it is a number return x
        return x;
    }
}
console.log(addFive("2")); // 7
console.log(addFive(5)); // 10
console.log(addFive(true)); // false
console.log(addFive("cat")); // false
//define a function names toTheThird that takes an input and returns
// that input to the third power (cubed); if the input is not
// numeric the function should return false
function toTheThird(x) {
    x = parseInt(x);
    if (isNaN(x)) {
        return false;
    } else {
        return x * x * x;
    }
}
console.log(toTheThird("2")); // 8
console.log(toTheThird(5)); // 125
console.log(toTheThird(true)); // false
console.log(toTheThird("cat")); // false
// Define a function named lowerCase that takes in a single input.
// If the input is not a string, return false. If the input is a
// non-numeric string, then return it with all the letters capitalized.
function lowerCase(x) {
    if (!isNaN(parseInt(x))) {
        return false;
    } else if (typeof (x) === "string") {
        return x.toLowerCase();
    } else {
        return false
    }
}
console.log(lowerCase("2")); // false
console.log(lowerCase(5)); // false
console.log(lowerCase(true)); // false
console.log(lowerCase("CAT")); // CAT
// Write a function named sumOfCubes that takes in two inputs.
// If both inputs are numeric, sumOfSquares should cube each input and
// return the sum of them added together. For example, if we pass a and
// b then we should cube a and add it to the cube of b. If either or
// both inputs are not numeric, sumOfSquares should return false.
function sumOfCubes(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (isNaN(x) || isNaN(y)) {
        return false;
    } else return (toTheThird(x) + toTheThird(y)); // ((x*x*x*)+(y*y*y);
}
//
console.log(sumOFCubes("2", "5")); //8 + 125 = 133
console.log(sumOFCubes(5, 4)); //125 + 64 = 189
console.log(sumOFCubes(true, true)); //false
console.log(sumOFCubes("cat", "dog")); //false





// Write a function named divide that takes in two inputs.
// If both inputs provided are numeric, divide returns the result
// of the first input multiplied by the second. If either or both
// inputs are not numeric, divide should return false.
//parseInt if not decimal, is a whole number and parseFloat if decimal. parseFloat for universal both
//cannot divide by 0
function divide(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    if (isNaN(x) || (isNaN(y))) {
        return false
    } else if (y === 0) {
        return false
    } else {
        return x / y;
    }
}
//
console.log(divide("12", "4")); // 12 / 4 = 3
console.log(divide(20, 6)); // 20 / 6 = 3.33333~
console.log(divide(true, true)); // false
console.log(divide("cat", "dog")); //false
//
// hey, aren't there special rules when it comes to dividing with or by 0???
//
console.log(divide(0, 12));
console.log(divide(12, 0));





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Write a function named reverseUpperCaseString that takes in a single input.
// If the input is a numeric string, then return false. If the input is a
// string, return that string capitalized and reversed
function reverseUpperCaseString(x) {
    if (!isNaN(parseFloat(x))) {
        return false;
    } else if (typeof (x) !== "string") {
        return false;
    } else {
        x = (x.split("").reverse().join("")).toUpperCase(); // x = (x.split("").reverse().join("")).toUpperCase();
        return x;
    }
}
//
console.log(reverseUpperCaseString(true)); // false
console.log(reverseUpperCaseString(18)); // false
console.log(reverseUpperCaseString("15")); // false
console.log(reverseUpperCaseString("cat")); // TAC
console.log(reverseUpperCaseString("RaCeCaR")); // RACECAR
console.log(reverseUpperCaseString("yRaNoiTCId")); // DICTIONARY





// Write a function named getLowestNumber that takes in 3 arguments.
// If all 3 inputs are numbers or numeric strings, then return
// the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
// (!isNaN) means if it is a number
function getLowestNumber (x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    if (!isNaN(x) && (!isNaN(y) && (!isNaN(z)))) {
        return Math.min(x, y, z);
    } else return false
}
console.log(getLowestNumber(1, 15, 30)); // 1
console.log(getLowestNumber(true, false, true)); // false
console.log(getLowestNumber("1", "15", "30")); // 1
console.log(getLowestNumber("cat", "dog", "hippopotamus")); // false
console.log(getLowestNumber(1, "otter", 30)); // false
console.log(getLowestNumber(-53, 72, 7)); // -53



//---------- CODEWARS -------------//

// Given an array of integers, return a new array with each value doubled.
    // For example:
    // [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method
// it comes in very handy quite a lot so is a good one to know.

function maps(x){
    var double = x.map(function(x){
        return x*2;
    })
    return double;
};
console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);



// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    return x.split(" ").join("");
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');




// 101 JS //
const shoppingCart = {
    tax: 0.08,
    items: [
        {
            title: "orange juice",
            price: 3.99,
            quantity: 1
        },
        {
            title: "rice",
            price: 1.99,
            quantity: 3
        },
        {
            title: "beans",
            price: 0.99,
            quantity: 3
        },
        {
            title: "chili sauce",
            price: 2.99,
            quantity: 1
        },
        {
            title: "chocolate",
            price: 0.75,
            quantity: 9
        }
    ]
};

// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
function getTaxRate(cart){
    return cart.tax;
}


assert(getTaxRate(shoppingCart), 0.08, "Exercise 96");
addToDone("Exercise 96 is complete");

// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
function numberOfItemTypes(cart){
    return cart.items.length;
}
// 101 JS END //

const shoppingCart = {
    tax: 0.08,
    items: [
        {
            title: "orange juice",
            price: 3.99,
            quantity: 1
        },
        {
            title: "rice",
            price: 1.99,
            quantity: 3
        },
        {
            title: "beans",
            price: 0.99,
            quantity: 3
        },
        {
            title: "chili sauce",
            price: 2.99,
            quantity: 1
        },
        {
            title: "chocolate",
            price: 0.75,
            quantity: 9
        }
    ]
};
// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type
function totalNumberOfItems (cart){
    var total = 0;

    for (var i = 0; i< cart.items.length; i++){
        total += cart.items[i].quantity;
    }
    return total;
}

console.log(totalNumberOfItems(shoppingCart));


// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\
function getAverageItemPrice(cart){
    var total = 0;
    var totalPrice = 0;

    for (var i = 0; i<cart.items.length; i++){
        totalPrice += cart.items[i].price;
        total++;
    }
    return totalPrice / total;
};

console.log(getAverageItemPrice(shoppingCart));

// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
function getAverageSpentPerItem(cart){
    var totalAmount = 0;
    var totalPrice = 0;

    for (var i = 0; i<cart.items.length; i++){
        totalPrice += (cart.items[i].price * cart.items[i].quantity);
        totalAmount += cart.items[i].quantity;
    }
    return totalPrice / totalAmount;
};

console.log(getAverageSpentPerItem(shoppingCart));

// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
function mostSpentOnItem(cart){
    var itemPriceTotal = 0;
    var mostSpent = [];

    for(var i =0; i<cart.items.length;i++){

        if ((cart.items[i].price * cart.items[i].quantity) > itemPriceTotal){
            itemPriceTotal = (cart.items[i].price * cart.items[i].quantity);
            mostSpent = cart.items[i];
        }
    }
    return mostSpent;
};

console.log(mostSpentOnItem(shoppingCart));