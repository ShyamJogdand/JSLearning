class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}
const axis_bank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
const sbi_bank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",6.5 );
const icici_bank = new Bank("ICICI Bank", "Nigdi", "9870765", "ICI003211234",9.75 );
const kotak_bank = new Bank("Kotak Bank", "Warje", "65868970", "KO30948",5.7 );
const hdfc_bank = new Bank("HDFC Bank", "Aakurdi", "25876688", "HDFC-0832",12.75 );
const panjab_ank = new Bank("Panjab Bank", "Barp Road, Pune", "854996648", "PNJ2303", 11.50);

console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_ank);

console.log("");
console.log("========== Traversing Map of Banks' Objects ==========");

const mapOfBank = new Map();
mapOfBank.set("4597863258", axis_bank);
mapOfBank.set("62514897564", sbi_bank);
mapOfBank.set("9870765", icici_bank);
mapOfBank.set("65868970", kotak_bank);
mapOfBank.set("25876688", hdfc_bank);
mapOfBank.set("854996648", panjab_ank);


const element = mapOfBank.get("4597863258");
// console.log(element.ifsc);
const keysOfMap = mapOfBank.keys();
for (const key of keysOfMap) {
    const element = mapOfBank.get(key);
    console.log(`Bank Name: ${element.bankName}, Acc No: ${element.accountNo}, Interest Rate: ${element.interestRate}`);
}