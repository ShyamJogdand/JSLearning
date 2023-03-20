// Constructor function
console.log("========== Constructor function for the Bank ==========");
function Bank(bankName, location, ifscCode, brachCode){ 
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.brachCode = brachCode;
    this.show = function(){ //function as value
       console.log(`Bank Details: ${this.bankName} ${this.location} ${this.ifscCode} ${this.brachCode} `);
    }
}

const sbiBank = new Bank("SBI Bank", "Wakad", "SBIN0004598", 0001 );
sbiBank.show();

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "AXIS4567893", 0002);
axisBank.show();

const yesBank = new Bank("Yes Bank", "Warje", "SBNK0398598",0003 );
yesBank.show();

const mahaBank = new Bank("Maha Bank", "Nigdi Road, Pune", "MAHA7652376", 0004);
mahaBank.show();
console.log("");
console.log("========== Adding data members to the prototype object ==========");
Bank.openTime = "9 AM IST";
console.log(`Open time: ${Bank.openTime}`);
Bank.closeTime = "6 PM IST";
console.log(`Close time: ${Bank.closeTime}`);

console.log("");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log(`Bank: ${sbiBank.bankName}, Open time:${Bank.openTime}, Close time: ${Bank.closeTime}`);
console.log(`Bank: ${axisBank.bankName}, Close time: ${Bank.closeTime}`);
console.log(`Bank: ${yesBank.bankName}, Branch Code: ${yesBank.brachCode}, Open time: ${Bank.openTime}`);

