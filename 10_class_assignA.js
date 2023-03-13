console.log("========== Class for Vehicals ===========");
class Vehical{
    constructor(vehicalName, model, mileage, price, engine){
        this.vehicalName = vehicalName;
        this.model = model;
        this.mileage = mileage;
        this.price = price;
        this.engine = engine;
    }
    showDetails(){
        console.log(`Bank Details: ${this.vehicalName} ${this.model} ${this.mileage} ${this.price} ${this.engine} `);
    }
}
const hondaShine = new Vehical("Honda Shine", "BS6", "65 kmpl", "Rs. 78,687 - 84,187", "124 cc" );
const heroSpendor = new Vehical("Hero Splendor", "HS035", "70 kmpl", "Rs.72,076 - 74,396", "97.2 cc" );
const puslar = new Vehical("Bajaj Pulsar 150", "BP150", "47.5 kmpl", "Rs.1.07 - 1.10 Lakh", "149.5 cc" );
const hyundai = new Vehical("Hyundai Creta", "HynCr024", "16.8 kmpl", "Rs 10.84 - 19.13 Lakh", "500 cc" );
const audi = new Vehical("Audi Car", "Audi Q5", "13.47 kmpl", "Rs.61.51 - 67.31 Lakh", "1000 cc" );

// hondaShine.showDetails();


// const arrayOfVehicals = [hondaShine, heroSpendor, puslar, hyundai, audi]; // wrong steps to traverse
// for (let index = 0; index < arrayOfVehicals.length; index++) {
//     console.log(arrayOfVehicals[index]);    
// }
function traverseObject(bankObject){
    for (const key in bankObject) {
        if (Object.hasOwnProperty.call(bankObject,key)) {
            const element = bankObject[key];
            console.log(`Object Key: ${key}  & Value is: ${element}`);   
        }
    }
}
traverseObject(hondaShine);
console.log("");
traverseObject(heroSpendor);
console.log("");
traverseObject(puslar);
console.log("");
traverseObject(hyundai);
console.log("");
traverseObject(audi);

console.log("------------------------------------------------------------------------------------------");
console.log("========== Class for College ===========");
class College{
    constructor(collegeName, location, PIN, course){
        this.collegeName = collegeName;
        this.location = location;
        this.PIN = PIN;
        this.course = course;
    }
}
const college1 = new College("Modern College", "Nanded", "431805", "BCA/BCS");
const college2 = new College("Indira College", "Wakad Pune", "294021", "MCA/MCS");
const college3 = new College("Code Mind", "Pune", "007007", "Angular");
const college4 = new College("JSPM", "Chinchwad PUne", "354923", "MBA/MCS/MCS");
console.log(college1);
console.log(college2);
console.log(college3);
console.log(college4);

console.log("------------------------------------------------------------------------------------------");
console.log("========== Traverse Function College objects ===========");

function traverseObject(bankObject){
    for (const key in bankObject) {
        if (Object.hasOwnProperty.call(bankObject,key)) {
            const element = bankObject[key];
            console.log(`Object Key value is: ${key} ${element}`);   
        }
    }
}
traverseObject(college1);
console.log("");
traverseObject(college2);
console.log("");
traverseObject(college3);
console.log("");
traverseObject(college4);

console.log("------------------------------------------------------------------------------------------");
console.log("========== Prime number ===========");

// prime is a number which is divisible by 1 or itself

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }        
    }
    return true;
}
let result = isPrime(11);
let res = result ? "Yes" : "No"
console.log(`Is 11 Prime Number: ${res}`);

console.log(`Is 10 Prime Number: ${isPrime(10) ? "Yes" : "No"}`);