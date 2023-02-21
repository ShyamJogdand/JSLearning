var greet = "Good Morning";
console.log(typeof greet);

console.log(" Total number of chars available into this string variable - greet");
var greetLenght = greet.length;
console.log(greetLenght);

console.log("Find the charecter by index value:");
var charAtIndex3 = greet.charAt(3);
console.log("Charecter availbale at incex 3 is :", charAtIndex3);

console.log("Find the last charecter");
var charAtLastIndex = greet.charAt(greetLenght-1);
console.log("Last char is: ", charAtLastIndex);

console.log("Find the index by charecter value");
var indexOfM = greet.indexOf('M');
console.log("Index of Char M is: ", indexOfM);

console.log("Incdex of char which is not available into the string:", greet.indexOf('z'));

console.log("Index of o char: ", greet.indexOf('o'));
console.log("Index of o char using LastIndexOf(): ", greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning", "Evening");
console.log(greet);
console.log(replaceResult);

console.log("Upper case:", replaceResult.toUpperCase());
console.log("Lower case:", replaceResult.toLowerCase());

var myName = "     Mohit     Sharma     ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim ()", myNameAfterTrim, myName.length, myNameAfterTrim.length);

//Find the total extra spaces removed form the string - myName
var count =  myName.length - myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(), myName.trimEnd());

console.log("Includes ()");
console.log("Is substrings Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substrings Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substrings 0 includes in the greet or not: ", greet.includes("o"));

// console.log("slice() method");
// var sliceResult = greet.slice(5, 12);
// console.log(sliceResult);
// console.log(greet.slice(2, 5));

console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);
console.log(typeof splitResult);

var myFriendList = "Bill Gates, Stew Job, Elonn Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murthi";
var totalFriendList = myFriendList.split(",");
console.log(totalFriendList);
console.log(totalFriendList.length);