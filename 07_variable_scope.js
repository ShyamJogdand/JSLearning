

var firstName; // variable delcaration
firstName = "Virat"; // variable initializaton

var lastName = "Kohli"; // variable declaraion & initialization in the same line
firstName = "King Kohli"; // variable update

var firstName;// variable re-declaration
console.log(firstName);

let city;
city = "Delhi";

// let city = "Mumbai"; // Not allowed variable re-declaration

const PI = 3.14;
// PI = 3.14; // Update or modify not alloweed
console.log(PI);

// const PI = 9.20; // re-declaration & re-initialization not allowed
var num = 10;
if(num==10){
    let word = "Revesion is the mother of success";
console.log(word);

}

function sayHi(){
    var greet = "Hi good morning";
    if (arg%2==0){
        var isEven = true;
    } else {
        var isEven = false;
    }
    return isEven;

}
sayHi();
console.log(greet);


// Factorial
function fun(num){
let factorial=1; // block scope
    {
    factorial = factorial * indexedDB;
    }
}
fun(5);
console.log(`Factorial 5 is ${factorial}`); // will it allow or not?