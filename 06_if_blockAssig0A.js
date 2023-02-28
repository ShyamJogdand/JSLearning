console.log("--------------- Even or Odd ---------------");
function checkEvenOdd(num){
    if (num%2==0){
        console.log(`Given number is: ${num}`);
        return "Even";
    }
    if (num%2!=0){
        console.log(`Given number is: ${num}`);
        return "Odd";
    }
    }
     var restult = checkEvenOdd(45);
     console.log(`And it is: ${restult}`);
     var restult = checkEvenOdd(70);
     console.log(`And it is: ${restult}`);
     var restult = checkEvenOdd(67);
     console.log(`And it is: ${restult}`);
     var restult = checkEvenOdd(98);
     console.log(`And it is: ${restult}`);

console.log("--------------- Voting Elilgibility ---------------");
function checkVotEligibility(num){
    if (num>=18){
        console.log(`Given age is: ${num}`);
        console.log("Eligible for Vote");
    }
    else{
        console.log(`Given age is: ${num}`);
        console.log("Not eligible for Vote");
    }
    }
     checkVotEligibility(18)
     checkVotEligibility(10);
     checkVotEligibility(17);
     checkVotEligibility(20);

console.log("--------------- String Charecters (if...else...) ---------------");
// need to use function
var strChar = "JavaScript-ES6";
console.log("Given String is :", strChar);
var strCharLngth = strChar.length;
console.log(`And it has ${strCharLngth} charecters.`);
if (strCharLngth>10) {
    console.log("Yes it has more than 10 charecters.");
}

console.log("--------------- Check string starts form 'Java' ---------------");
// var srngName = 'JavaScript Language';
// var first = srngName.split(' ')[0] // to find first word
// console.log(first);

var srngFstName = "JavaScript Language";
console.log(`The string "${srngFstName}" starts from :`, srngFstName.substring(0,4));

