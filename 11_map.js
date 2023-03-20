const mapOfNumbers = new Map();
mapOfNumbers.set("One", 1);
mapOfNumbers.set("Two", 2);
mapOfNumbers.set("Three", 3);
mapOfNumbers.set("One", 5); 
// mapOfNumbers.set("Four", 2);
// mapOfNumbers.set("Two", 22);
console.log(mapOfNumbers.size);
console.table(mapOfNumbers);

console.log(mapOfNumbers.get(`One`));
mapOfNumbers.delete("Two");
console.log("After Delete", mapOfNumbers.size);
console.log(mapOfNumbers.has("Two")); //false

const valueOfMap = mapOfNumbers.values();
console.log(valueOfMap);

console.log("Traversing map");
const keysOfMap = mapOfNumbers.keys(); // returns keys
// console.log(keysOfMap);
for (const key of keysOfMap) {
    console.log(key, mapOfNumbers.get(key));
}