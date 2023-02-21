console.log("********** Function with no args & no return value **********");
function simpleFuction1(){
    console.log("Hi, this is 1st no args & no return fuction.");
}
simpleFuction1();

function simpleFuction2(){
    console.log("Hi, this is 2nd no args & no return fuction.");
}
simpleFuction2();

console.log("********** Function with args inside funtion & no return value **********");
function personalDetials(firstName, lastName, collegeName){
    firstName = "Shyam";
    console.log("First Name   :", firstName);
    lastName = "Jogdand";
    console.log("Last Name    :", lastName);
    collegeName = "Modern College";
    console.log("College Name :", collegeName);
}
personalDetials();

console.log("********** Swap function with two args & no return value **********");
function swapValuesDude(temp1, temp2){
    console.log("Before swap    :", temp1);
    console.log("Before swap    :", temp2);
    var temp3;
    temp3 = temp1;
    temp1 = temp2;
    temp2 = temp3;
    console.log("After swap     :", temp1);
    console.log("After swap     :", temp2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("********** Function with args & return value **********");
function addThreeValues(num1, num2, num3){
    var sum = num1 + num2 + num3;
    console.log("Sum of given values :", sum);
    return sum;
}
var sumRusult = addThreeValues(10.23, 600, 40);
var sumRusult2 = addThreeValues("Hello ", "Good ", "Morning.!");
