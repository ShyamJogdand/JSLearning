console.log("--------------- Factorial of total words of a String ----------");
function factorialOfNum(fStrng){
    
    let strLength = fStrng.split(" ").length;
    console.log("   ");

    console.log(`Given string is "${fStrng}" of : ${strLength} words`);
    let fac =1;
    for (strLength; strLength >= 1; strLength--) {
        fac = fac * strLength;
    }
    return fac;
}
var result = factorialOfNum("Revision is the mother of Success");
console.log(`Factorial of given string's total words is          : ${result}`);

var result = factorialOfNum("We never fail, we always learn");
console.log(`Factorial of given string's total words is          : ${result}`);

var result = factorialOfNum("Shyam Chudaman Jogdand");
console.log(`Factorial of given string's total words is          : ${result}`);

var result = factorialOfNum("");
console.log(`Factorial of given string's total words is          : ${result}`);

// var result = factorialOfNum(NaN);
// console.log(`Factorial of given string's total words is       : ${result}`); // giving an error

// var result = factorialOfNum(null);
// console.log(`Factorial of given string's total words is       : ${result}`); // giving an error

// var result = factorialOfNum(undefined);
// console.log(`Factorial of given string's total words is       : ${result}`); // giving an error
