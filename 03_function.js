function showFullName(){
    console.log("My full name is : Shyam Jogdand");
}
showFullName()

function showAge(age){
    console.log("My age is:", age);
}
showAge(32);

function fullName(){
    var name = "Aarohi Jogdand";
    return name;
}
var fName = fullName();
console.log(fName);

function sumOfNumbers(num1, num2, num3){
    var sum = num1 + num2 + num3;
    return sum;
}
var sumRusult = sumOfNumbers(10,45,79.56);
console.log(sumRusult);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety";
var str2 = "Cutie";

name1 = "Sangita";
name2 = "Jogdand";

function swapVariables(value1, value2) {
    console.log("Befor Swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap:", value1, value2);
    return "Swapping variables successfully completed";
}

var swapResult = swapVariables(num1, num2); //Function call or function invoke.
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);
