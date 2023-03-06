const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`An array with the given elements is : ${arraySeasonalFruits}`);
console.log(`The first element of an array is : ${arraySeasonalFruits[0]}`);
console.log(`The last element of an array is : ${arraySeasonalFruits[arraySeasonalFruits.length-1]}`);

// console.log("==== Adding element in the first using unshift() === ");
console.log("");
arraySeasonalFruits.unshift("Papaya");
console.log(`Adding the "Papaya" before "Banana" : ${arraySeasonalFruits}`);

console.log("");
const deleteMango = arraySeasonalFruits.splice(4,1);
console.log(`Removed ${deleteMango} from the array : ${arraySeasonalFruits}` );

console.log("");
arraySeasonalFruits.push("Pineapple");
console.log(`Adding the "Pineapple" at last of an array: ${arraySeasonalFruits}`);

console.log("");
arraySeasonalFruits.splice( 4, 0, "Dragon Fruit");
console.log(`Adding the "Dragon Fruit" before "Water Melon" : ${arraySeasonalFruits}`);

console.log("");
arraySeasonalFruits.splice(2, 1 ,"Kiwi");
console.log(`Replacing "Orange" with "Kiwi" : ${arraySeasonalFruits}`);

console.log("");
console.log("Elements form Index 1 to 4");
for (let index = 1; index <= arraySeasonalFruits.length-3; index++) {
   console.log(`Index element : ${arraySeasonalFruits[index]+ " "}`);
}

console.log("");
console.log("Last three elements");
for (let index = 4; index <= arraySeasonalFruits.length-1; index++) {
   console.log(`Elements: ${arraySeasonalFruits[index]+ " "}`);
}