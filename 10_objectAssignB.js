console.log("========== Bank & Location objects created ==========");
let sbiBank = {
    bankName: "SBI Bank",
    account: 39983893978,
    ifscCode: "SBI00002354",
    brachCode: 1001
}

let bankLocation = {
    street: "Balewadi",
    city: "Pune",
    pinCode: 435209
}
console.log(sbiBank);
console.log(bankLocation);

console.log("");
console.log("===== Cloning objects using Object.assign() =====");
const objSbiBank = Object.assign({}, sbiBank);
console.log(objSbiBank);
const objBnkLocation = Object.assign({}, bankLocation);
console.log(objBnkLocation);

console.log("");
console.log("===== Cloning objects using spread operator =====");
const newSbiBank = {...sbiBank};
const newBankLocation = {...bankLocation};
console.log(newSbiBank);
console.log(newBankLocation);

console.log("");
console.log("===== Log cloned objects' details =====");
console.log(`sbiBank: After cloning with Object.assing(): ${objSbiBank.bankName}, ${objSbiBank.account}, ${objSbiBank.ifscCode}, ${objSbiBank.brachCode}`);
console.log(`bankLocation: After cloning with Object.assing(): ${objBnkLocation.street}, ${objBnkLocation.city}, ${objBnkLocation.pinCode}`);


console.log("");
console.log("========== Merging objects ==========");
let rateOfInterest = {
    homeLoanInterest: 14.00,
    personalLoanInerest: 15.00,
    duelInterest: 12.50
}
const sbiDetails = {
    ...sbiBank,
    ...bankLocation,
    ...rateOfInterest
}
console.table(sbiDetails);

console.log("");
console.log("========== Traverse merged object ==========");
function traverseObject (obj){
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`Agter mergig objects: ${obj.bankName} & value: ${key}`);
    }
}
}
traverseObject(sbiDetails);