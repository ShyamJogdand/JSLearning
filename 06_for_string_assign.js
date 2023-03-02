console.log("---------- Program to count the number of vowels in a string ----------");
console.log("                                                                     ");
// code took from internet
// defining vowels
var vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

var result = countVowel("JavaScript is the language of Internet");
console.log(`JavaScript is the language of Internet.         It includes: ${result} Vowels`);

var result = countVowel("I am Angular Developer");
console.log(`I am Angular Developer.                         It includes: ${result} Vowels`);

var result = countVowel("Hard work and commitment is the key of success");
console.log(`Hard work and commitment is the key of success. It includes: ${result} Vowels`);

console.log("                                                                     ");
console.log("---------- Program to count the number of word of a string ----------");
console.log("                                                                     ");

function lastWordCharsCounnt (s) {
    const words = s.trim().split(" ");
    return words.length > 0 ? words[words.length - 1].length : 0;
  };
var result = lastWordCharsCounnt("JavaScript is the language of Internet");
console.log(`JavaScript is the language of Internet.         Last word count is: ${result}`);

var result = lastWordCharsCounnt("I am Angular Developer");
console.log(`I am Angular Developer.                         Last word count is: ${result}`);

var result = lastWordCharsCounnt("Hard work and commitment is the key of success");
console.log(`Hard work and commitment is the key of success. Last word count is: ${result}`);