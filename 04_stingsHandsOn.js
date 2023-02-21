function stringHandsOn(){

var givenString = "     Hey you are doing good, keep it up     ";
console.log("Given string is                   :", givenString);

var strnLenght = givenString.length;
console.log("Length of the given string is     :", strnLenght);

var strTrim = givenString.trim();
console.log("After removing extra spaces       :", strTrim);
console.log("After removing- string length is  :", strTrim.length);

var count =  givenString.length - strTrim.length;
console.log("Removed space count               :", count);

console.log("First char of string              :", strTrim.charAt(strTrim));
var charLast = strTrim.charAt(strnLenght-1);
console.log("Last char of string               : ", charLast);

console.log("Total worlds in the string        :", strTrim.split(" "));

console.log("Index of good word among string   :", strTrim.indexOf('good'));

console.log("Substring starting from index 22  :", strTrim.slice(22));

console.log("String ends with word 'up'        : ", strTrim.includes("up"));

console.log("String starts with word 'Hey'     : ", strTrim.includes("Hey"));




}
stringHandsOn();