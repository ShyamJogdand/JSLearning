console.log("===== Length & Square of words =====");

function squareOfWordLength(worlLength){
    var result = worlLength.length;
    console.log(`Word lengh of ${worlLength} is :`, result);
    result = result * 2;
    console.log(`Square of given word ${worlLength} is :`, result);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Crome");
squareOfWordLength("Developer Smart");


console.log("===== Calculations of string's count =====");

function strngCalculations(){
    var string1 = "I am Angular Developer";

    var string1Length = string1.length;
    console.log(`Length of string ${string1} is:`, string1Length);

    var stringTotalWords = string1.split(" ");    
    console.log(`Total words of given string ${string1} is:`, stringTotalWords);

    var stingDivision = string1Length / 4;
    console.log("Division of string length with total words is:", stingDivision);

    var stingMultiplication = string1Length * 4;
    console.log("Multiplication of string length with total words is:", stingMultiplication);
}
strngCalculations();