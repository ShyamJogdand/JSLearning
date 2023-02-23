console.log("===== Male Marriage Eligibility =====");
function maleMarriageEligibility(gender, age, boyName){
    console.log(`Found your age as :`, age);
   var genResult = age >= 21 ?  `Hey ${boyName} you are eligible for marriage.` : `Sorry ${boyName} you are not eligible for maariage.`
   return genResult;
}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);

console.log("===== Female Marriage Eligibility =====");
function femaleMarriageEligibility(gender, age, gilrName){
   console.log(`Found your age as :`, age);
   var genResult = age >= 18 ?  `Hey ${gilrName} you are eligible for marriage.` : `Sorry ${gilrName} you are not eligible for maariage.`
   return genResult;
}
var result = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result);

var result = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result);