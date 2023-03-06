const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("--------------- Given Array, its 1st & last elements ---------------");
console.log(`An array with the given elements is : ${arraySeasonalFruits}`);
console.log(`The first element of an array is : ${arraySeasonalFruits[0]}`);
console.log(`The last element of an array is : ${arraySeasonalFruits[arraySeasonalFruits.length-1]}`);

// console.log("==== Adding element in the first using unshift() === ");
console.log("");
console.log("--------------- Adding an element at 1st posistion of an array ---------------");
arraySeasonalFruits.unshift("Papaya");
console.log(`Adding the "Papaya" before "Banana" : ${arraySeasonalFruits}`);

console.log("");
console.log("--------------- Removing an element from the array ---------------");
const deleteMango = arraySeasonalFruits.splice(4,1);
console.log(`Removed ${deleteMango} from the array : ${arraySeasonalFruits}` );

console.log("");
console.log("--------------- Adding an element to the last posistion of the array ---------------");
arraySeasonalFruits.push("Pineapple");
console.log(`Adding the "Pineapple" at last of an array: ${arraySeasonalFruits}`);

console.log("");
console.log("--------------- Adding an element at 2nd position from the last element of the array ---------------");
arraySeasonalFruits.splice( 4, 0, "Dragon Fruit");
console.log(`Adding the "Dragon Fruit" before "Water Melon" : ${arraySeasonalFruits}`);

console.log("");
console.log("--------------- Replacing an element of the array ---------------");
arraySeasonalFruits.splice(2, 1 ,"Kiwi");
console.log(`Replacing "Orange" with "Kiwi" : ${arraySeasonalFruits}`);

console.log("");
console.log("--------------- Elements form Index 1 to 4 ---------------");
for (let index = 1; index <= arraySeasonalFruits.length-3; index++) {
   console.log(`Index element : ${arraySeasonalFruits[index]+ " "}`);
}

console.log("");
console.log("--------------- Last three elements---------------");
for (let index = 4; index <= arraySeasonalFruits.length-1; index++) {
   console.log(`Elements: ${arraySeasonalFruits[index]+ " "}`);
}