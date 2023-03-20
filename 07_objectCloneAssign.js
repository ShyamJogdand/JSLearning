console.log("========== Step 1 ==========");
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const arrayNums1 = arrayNums;
arrayNums1.push(55, 66);
console.log(`Cloned array: ${arrayNums1}\nOrigenal array: ${arrayNums}`);

console.log("========== Step 2 ==========");
const arrayNums2 = [...arrayNums];
arrayNums.push(10,25);
console.log(`Cloned array: ${arrayNums2}\nOrigenal array: ${arrayNums}`);

console.log("========== Step 3 ==========");
const evenArray = [2, 30, 14, 8];
const concatArray = [...evenArray, ...arrayNums];
console.log(`Given array: ${evenArray}\nOrigenal array: ${arrayNums}\nAfter concating these arrays: ${concatArray}`);

console.log("========== Step 4 Created Emp object ==========");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "4,00,000INR",
        aug_month: "5,00,000INR",
        jun_month: "6,50,000INR",
    },
    address: {
        locality: {
            colony: "Om Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3458 88", "1800- 4567 32", "+91 9096 5678 77"]
}
console.log("========== Step 5 ==========");
console.table(employee_info.address);
console.log(`Emp mobiles: ${employee_info.mobiles}`);

console.log("");
console.log("========== Step 6 ==========");
const myJSON = JSON.parse(JSON.stringify(employee_info));
myJSON.salary.july_month ="80, 000INR";

employee_info.address.country= "United Kingdom";
console.log(`Cloned object value ${myJSON.salary.july_month}, Origenal ovject value ${employee_info.address.country}`);






