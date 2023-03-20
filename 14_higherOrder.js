function doHomeWork(callback){
    console.log("Doing homework..");
    console.log("Finally homework is done..");
    callback();
    let submitHomework = function(){
        console.log("Hey we both completed HW...");
        console.log("Let us submit plz...");
    }
    return submitHomework;
}
function copyHomeWork(){
    console.log("Copying homework...");
    console.log("Thank you.. I copied homework...");
}
const submitFunction = doHomeWork(copyHomeWork);
submitFunction();