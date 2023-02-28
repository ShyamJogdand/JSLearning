console.log("===== TCS Interview Eligibility =====");
function tcsEligibility (gradScore, hscScore, sscScore, candidateName){
    if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
        console.log(`Congrats ${candidateName} you are eligible for TCS interview.`);
    } else {
        console.log(`Sorry ${candidateName}, unfortunately you are not eligible for TCS interview.`);
    }
}
tcsEligibility(80, 86, 90, "Shyam");
tcsEligibility(70, 65, 55, "Dyani");
tcsEligibility(60, 79, 88, "Romi");