class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate ){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
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
console.log("========== Traversing Set of Banks' Objects ==========");

const seOfBanks = new Set();
seOfBanks.add(axis_bank);
seOfBanks.add(sbi_bank);
seOfBanks.add(icici_bank);
seOfBanks.add(kotak_bank);
seOfBanks.add(hdfc_bank);
seOfBanks.add(panjab_ank);

for (const bank of seOfBanks) {
    console.log(`Bank Name: ${bank.bank_name} & Locaton: ${bank.location}`);
}