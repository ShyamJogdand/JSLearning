// WAP to print numbers from 0 to 10
let index=0; // initialization
while (index<=10) { // condition
    console.log(index);
    index++; // Update Expression
}

console.log("===== traversin using while ======");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum = 0;
while (sum <arrayOfNumbers.length) {
    const element = arrayOfNumbers[sum];
    // console.log(`Sum of an Array element is: ${element}`);
    console.log(element);
    sum++;
    
}

console.log("Even numbers");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index1=0; // initialization
let sum1 = 0;
while (index1<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index1];
    if(element%2==0) {
        console.log(element);
        sum1 = sum1 + element;
    }
    index++; // Update Expression
}


