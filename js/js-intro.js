var a = 3;
var b = 5;
var c = 1;
console.log((a + b + c) * 3);

var google = 400 * 6;
var amazon = 380 * 4;
var fb = 350 * 10;
console.log(google + amazon + fb);

var classFull = false;
var classScheduleConf = false;
console.log(classFull || classScheduleConf);

var twoPlusItems = true;
var expired = true;
var prem = true;
console.log(twoPlusItems && expired);
console.log(prem && expired);




var username = 'codeup';
var password = 'notastrongpassword';

function noMatch() {
    return username != password;
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
