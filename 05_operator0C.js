console.log("===== TCS Interview Eligibility =====");
function tcsEligibility (gradScore, hscScore, sscScore, candidateName){
    var eligiResult = gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ? `Congrats ${candidateName} you are eligible for TCS interview.` : `Sorry ${candidateName}, unfortunately you are not eligible for TCS interview.`
    console.log(eligiResult);

}
tcsEligibility(80, 86, 90, "Shyam");
tcsEligibility(70, 65, 55, "Dyani");
tcsEligibility(60, 79, 88, "Romi");