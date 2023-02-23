console.log(`==== Arithmetic Operators ====`);
var num1 = 10;
var num2 = 20;
var num3 = num1 + num2;
console.log(`Addition is: ${num3}`);

var num3 = num1 - num2;
console.log(`Sub is: ${num3}`);

var num3 = num1 ** num2;
console.log(`Exponential is :${num3}`);

var num2 = 2;
var result = num1 + num2; // Addition
console.log(` Addition is ${result}`);

result = num1 - num2;
console.log(`Subtraction is  ${result}`);

result = num1 * num2;
console.log(`Multiplication is  ${result}`);

 result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

 result = num1 / 3;
 console.log(`Division is : ${result}`);

//  result = num1 * 3; //

 result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

 result = num1 / 3;
 console.log(` Division is ${result} `);

 result = num1 % 3; // Modulus
 console.log(` Reminder is ${result} `);

 var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);

 console.log(`Comarision operator`);
 var num3 = 10;
 var num4 = "10";
 console.log(num3==num4); //"10"==10
 console.log(num3===num4);

 console.log(num3==10);
console.log(12==11);
//  console.log(typeof num3);

console.log(num3 != num4);

console.log(10 > 20); // > Greater than
console.log(10 < 20); // < Less than

var marks = 35;
console.log(marks >= 35); // Greater than equal


console.log(marks <= 35);

// 23 Feb session
console.log("=== 23 Feb Session ===");

var marks = 70;
var result = marks >=60 ? "Allow him for interview" : "Don't allow";

console.log(result);

var age = 20;
var res = age >= 21 ? "Congratulation.." : "Ha ha next time..";

console.log(res);

// using true or false (ternary operator)

var age = 20;
var res = age >= 21 ? true : false;

console.log(res);

// Even & Odd
console.log("Even & Odd");
var myNumber = 7;
var result = myNumber % 2 == 0 ? "Even" : "Odd";
console.log(result);

var num1 = 10;
var num2 = 20;
var numRes = num1 > num2 ? num1 : num2;
console.log(numRes);

// 1at assignment clue
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

// 2nd assignment clue

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);