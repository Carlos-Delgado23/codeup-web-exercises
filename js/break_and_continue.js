do {
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));


    if (userNumber % 2 === 0) {
        alert(userNumber + " isn't odd, pick again");

    } else if (userNumber < 1 || userNumber > 50) {
        alert(userNumber + " isn't between 1 and 50, pick again");

    }else if (isNaN(userNumber)) {
        alert(userNumber + " isn't a number, pick again");

    }else {
        alert("congrats you picked the right number");
        break;
    }


} while (true);


for (var i = 1; i<= 50; i+=2){
    if (i === userNumber){
        console.log("Yikes skipping number " + i);
        continue;
    }

    console.log("here's and odd number " + i);
}