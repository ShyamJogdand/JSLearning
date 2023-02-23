console.log("===== Greatest Numbers =====");
function greaterNumber(num1, num2){
    var num3 = num1 > num2;
    console.log(`Greater number among ${num1} > ${num2} is :`, num3);
    // var num3 = num1 < num2;
    // console.log(`Greater number among ${num2} > ${num1} is :`, num3);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("===== Even & Odd Numbers =====");
function isEvenOrOddNum(evnOdNum){
    var result = evnOdNum % 2 == 0 ? "Even" : "Odd";
    console.log(`Given number is :`, evnOdNum);

    return result;
}
var evenOrOddResult = isEvenOrOddNum(29);
console.log("It is :", evenOrOddResult);

var evenOrOddResult = isEvenOrOddNum(44);
console.log("It is :", evenOrOddResult);

var evenOrOddResult = isEvenOrOddNum(0);
console.log("It is :", evenOrOddResult);

var evenOrOddResult = isEvenOrOddNum(101);
console.log("It is :", evenOrOddResult);

console.log("===== Even & Odd of Word's length =====");
function wordLength(givenWord){
    var wordLengthResult = givenWord.length;
    console.log(`Given word is ${givenWord} & its length is:`, wordLengthResult);
    var result = wordLengthResult % 2 == 0 ? "Even" : "Odd";
    return result;

}
var result = wordLength("JavaScript")
console.log("It is :", result);

var result = wordLength("Developer")
console.log("It is :", result);

var result = wordLength("Google")
console.log("It is :", result);