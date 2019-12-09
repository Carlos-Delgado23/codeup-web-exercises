// var i = 2;
//
// while (i <= 65536){
//     console.log(i);
//     i *= 2;
// }



// CONES EXERCISE

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// var custOrder = Math.floor(Math.random() * 5) + 1;



do{
    console.log(allCones);

    var custOrder = Math.floor(Math.random() * 5) + 1;

    if (custOrder > allCones){
    console.log('Sorry, only have ' + allCones + ' cones left');
        continue;
    } else {
        allCones -= custOrder;
    }

    console.log("-" + custOrder + ' cones sold. = ' + allCones + ' cones left.');

    console.log('==================');
    if (allCones === 0) {
        console.log("Yay! I sold them all!");
    }
} while (allCones !== 0);




