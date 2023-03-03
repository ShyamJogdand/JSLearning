console.log("--------------- Factorial of a number ----------");
function factorialOfNum(fNum){
    console.log(`Given number is              : ${fNum}`);
    let fac =1;
    for (fNum; fNum >= 1; fNum--) {
        fac = fac * fNum;
    }
    return fac;
}
var result = factorialOfNum(5);
console.log(`Factorial of given number is : ${result}`);

var result = factorialOfNum(3);
console.log(`Factorial of given number is : ${result}`);

var result = factorialOfNum(null);
console.log(`Factorial of given number is : ${result}`);

var result = factorialOfNum(8);
console.log(`Factorial of given number is : ${result}`);

var result = factorialOfNum(undefined);
console.log(`Factorial of given number is : ${result}`);

var result = factorialOfNum(9);
console.log(`Factorial of given number is : ${result}`);

var result = factorialOfNum(0);
console.log(`Factorial of given number is : ${result}`);

var result = factorialOfNum(NaN);
console.log(`Factorial of given number is : ${result}`);