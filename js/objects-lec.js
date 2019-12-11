var car = {
    make: "TESLA",
    model: "CYBERTRUCK",
    year: 2022,
    isTitled: true,
    options: ["SINGLE MOTOR RWD", "DUAL MOTOR AWD", "TRI MOTOR AWD"],
    addOn: "FULL SELF-DRIVING",
    goGoGo: function (key) {
        if (key == "key"){
            console.log("Let's go for a ride!");
        } else {
            console.log("Welcome driver. Today's weather is... ");
        }
    }
}

console.log("car was made in " + car.year);
console.log("car has these options:");
var writeOption = function (option) {
    console.log(option);
};
car.options.forEach(writeOption);
car.goGoGo("key");


// var    make = "Toyota";
// var    model = "Sienna";
// var    year = 2009;
// var isTitled = true;
// var goGoGo = function (key) {
//     if (key == "correct"){
//         console.log("vroom");
//     } else {
//         console.log("...");
//     }
// }

