console.log("========== Array Numbers ==========");
const arrayOfNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is : ${arrayOfNumbers}`);
console.log("");
console.log(`Total elements available in array is : ${arrayOfNumbers.length}`);
console.log(`First element available in array is : ${arrayOfNumbers[0]}\nLast element available in array is : ${arrayOfNumbers[arrayOfNumbers.length-1]}`);
console.log(`Third last element available in array is : ${arrayOfNumbers[arrayOfNumbers.length-3]}`);
console.log("");
console.log("========== Even Numbers ==========");

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if (element%2==0) {
        console.log(`EVEN number in array: ${element}`);
    }
}

console.log("");
console.log("========== ODD Numbers ==========");

for (let index = 1; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if (element%2!==0) {
        console.log(`ODD number in array: ${element}`);
    }
}

console.log("");
console.log("========== Even Position's elements of array ==========");
let evenArray = [];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (index%2==0) {
        evenArray.push(arrayOfNumbers[index]);
    }
}
console.log(`EVEN position's elements in array: ${evenArray}`);

console.log("");
console.log("========== Sum of even Position's elements of array ==========");
let evenArray1 = [];
let sum1= 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (index%2==0) {
        evenArray1.push(arrayOfNumbers[index]);
        sum1 = sum1 + arrayOfNumbers[index];
    }

}
console.log(`Sum of EVEN position's elements in array: ${sum1}`);

console.log("");
console.log("========== Odd Position's elements of array ==========");
let oddArray = [];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (index%2!==0) {
        oddArray.push(arrayOfNumbers[index]);
    }
}
console.log(`Odd position's elements in array: ${oddArray}`);

console.log("");
console.log("========== Sum of Odd Position's elements of array ==========");
let oddArray1 = [];
let sum2= 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (index%2!==0) {
        oddArray1.push(arrayOfNumbers[index]);
        sum2 = sum2 + arrayOfNumbers[index];
    }

}
console.log(`Sum of Odd position's elements in array: ${sum2}`);

console.log("");
console.log("========== Sum of array elements ==========");
let sum3= 0;
console.log(`Given array is : ${arrayOfNumbers}`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
        sum3 = sum3 + arrayOfNumbers[index];
}
console.log(`Sum of array elements: ${sum3}`);

console.log("");
console.log("========== Find the numbers which are multiple of 5 in array ==========");
let multipleOfFive = [];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (arrayOfNumbers[index]%5==0) {
        multipleOfFive.push(arrayOfNumbers[index]);
    }

}
console.log(`Numbers which are multiple of 5: ${multipleOfFive}`);

console.log("");
console.log("========== Check the values which are include in array or not ==========");
let isAvailable = arrayOfNumbers.includes(128);
console.log(`Is 128 includes in array: ${isAvailable}`);
console.log("");
console.log("========== Check the values which are include in array or not ==========");
let isAvailable1 = arrayOfNumbers.includes(23);
console.log(`Is 23 includes in array: ${isAvailable1}`);

console.log("");
console.log(`===Given array===: ${arrayOfNumbers}`);
arrayOfNumbers.splice(3, 0, 55,66);
console.log(`===After adding elements before 3rd index: ${arrayOfNumbers}`);

console.log("");
console.log("========== Deleting 3 array values from index 4 ==========");
delete arrayOfNumbers.splice(4,3);
console.log(`Array elements deleted from index 4: ${arrayOfNumbers}`);
