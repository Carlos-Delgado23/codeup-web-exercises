var a = 3;
var b = 5;
var c = 1;
console.log((a + b + c) * 3);
// WALK THROUGH //
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
console.log((littleMermaid + brotherBear + hercules) * 3);



var google = 400 * 6;
var amazon = 380 * 4;
var fb = 350 * 10;
console.log(google + amazon + fb);
//WALK THROUGH //
var googRate = 400;
var amaRate = 380;
var fbRate = 350;
var googMoney = 6 * googRate;
var amaMoney = 4 * amaRate;
var fbMoney = 10 * fbRate;
var finalPurse = amaMoney + fbMoney + googMoney;
console.log(finalPurse);



var classFull = false;
var classScheduleConf = false;
console.log(classFull || classScheduleConf);
//WALK THROUGH //
var classAt8AM = false;
var classSize = 125;
var currentClassSize = 108;
var CanRegister = (currentClassSize < classSize) && !classAt8AM;
console.log(canRegister);



var twoPlusItems = true;
var expired = true;
var premium = true;
console.log(twoPlusItems && expired);
console.log(premium && expired);
//WALK THROUGH //
var hasKrogerCard = true;
var cartSize = 6;
var offerValid = true;
var canHaveDisc = offerValid && (cartSize > 2 || hasKrogerCard);
console.log(canHaveDisc);




var username = 'codeup';
var password = 'notastrongpassword';

function noMatch() {
    return username !== password;
}
function usernameTwentyPlus(){
    return username.length <= 20;
}
function trimBoth() {
    return !!(password.trim() && username.trim());
}
function pwFivePlusChar() {
    return password.length >= 5;
}
function goodToGo(){
    return !!(pwFivePlusChar && noMatch && usernameTwentyPlus && trimBoth);
}
console.log(goodToGo());
// WALK THROUGH //
var atLeastFivePass = password.length >= 5;
var usernameNotInPass = password.indexOf(username) === -1;
var userNameNotAParagraph = username.length <= 20;
var noWhiteSpace = username.trim() === username && password.trim() === password;
