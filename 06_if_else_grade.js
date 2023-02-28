console.log("--------------- Grade Calculations ---------------");
function gradeCalculation(marks){
    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    if(marks<=0 || marks > 100 || (typeof marks!= "number") || isNaN(marks)){
        console.log(`Please provide the valid marks - ${marks}`);
    }else{
        console.log(`Excellent marks`);
    } 
    if (marks >=75 & marks<75);{
        console.log(`Good marks`);
    }
    if (marks >=50 & marks<75);{
        console.log(`Ok marks`);
    }
    if (marks >=35 & marks<50);{
        console.log(`Need improvement`);
    }

}
    gradeCalculation(98);
    gradeCalculation(80);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Eighty");
    gradeCalculation(NaN);
    gradeCalculation(null);


console.log("--------------- Vote Eligibility ---------------");
function voteEligibility(arg){
    if (arg>=18){
        console.log("Eligible for Vote");
    } else {
        console.log("Not eligibility for Vote");
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(18);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
