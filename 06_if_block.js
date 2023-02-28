console.log('Start');
var num = -10;
if (num >0){
    console.log('inside if');
    console.log(`Number is Positive ${num}`);
}
console.log('End');

var ageForVote = 20;
if (ageForVote >= 18) {
    console.log(`You are eligible for Voting`);
    console.log(`Age is : ${ageForVote}`);
}    
console.log(`End of next if block`);

function checkEvenOdd(num){
if (num%2==0){
    return "Even";
}
if (num%2!=0){
    return "Odd";
}
}
 var restult = checkEvenOdd(45);
 console.log(`Given number 45 is: ${restult}`);
 var restult = checkEvenOdd(70);
 console.log(`Given number 70 is: ${restult}`);

 var num1 = 5;
 if (num1>0) {
    console.log(`Number ${num1} is positive`);
 } else {
    console.log(`Number ${num1} is negative`);

 }

 function maleMarriageEligibility(gender, age, boyName){
    if (gender=="Male" && age>=21) {
        console.log("You are eligible for marriage");
    } else {
        console.log("Not eligible for marriage");
    }
 }
 maleMarriageEligibility("Male", 25, "Billgates");
 maleMarriageEligibility("Male", 20, "Anil");
