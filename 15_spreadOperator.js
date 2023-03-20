// Spread Operator ...
const array = [1, 2, 3, 5, 8, 9];
console.log(array);
console.log(...array);

const student = {
    fullName: "Anjju",
    age: 23,
    city: "Pune"
}
console.log(student);
// console.log(...student); // not works

// ... Rest parameter
function show(arg1, ...arg){
    console.log(arg1, arg);

}
show(3, 4, 6, 8, 9);