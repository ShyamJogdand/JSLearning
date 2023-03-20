console.log(myName); // allowed to access
// console.log(age); // not allowed to acess
var myName = "Virat Kohli";
let age = 33;

show(); // allowed as it is normal functions are hoisted
function show(){
    console.log("Hi show function");
}

greet(); //  not allowed  as it is FE and FE is not allowed hoisting
var greet = function(){ // even we use let to declare it, not allowed
    console.log("Good morning");
}

console.log("Prime numbers"); // practice

function getPrimeNumbers(num){
    // array of prime numbers till num starting from 2
}
const arrayNums = getPrimeNumbers(50); // (33) & try fibonacci series