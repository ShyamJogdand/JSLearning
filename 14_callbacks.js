console.log("===== callbacks =====");
function doAssignment(callback){
    // Ajay
    console.log("Solving assignment");
    console.log("Step 1 to 10 are solved now");
    callback();
}
function copyAssingment(){
    // Ajinkya
    console.log("Thank you Ajju, let me copy assignment");
    console.log("Ohh finally copied all assignments.");
}
doAssignment(copyAssingment);

function greet(){
    console.log("Good Morning...");
}
// 1 sec = 1000 mili seconds
// 3 sec = 3000 ms
setTimeout(greet, 4000);


// setTimeout(function greet(){ // short hand of timeout method
//     console.log("Good Morning...");
// }, 4000);

console.log("===== function as first class citizan =====");
function firstClass(){
    console.log("We can return function from another function");
    function innerFunction(){ // we can return as unknown function or return as it is function
        console.log("Inner function");
    }
    return innerFunction;
}

// firstClass()(); // short hand
const inner = firstClass();
inner();






