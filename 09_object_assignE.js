let sbiBank = {
    bankName : "SBI Bank",
    location: "Narhe",
    account: 62514897564,
    ifsc: "SBIN0004598",
    interestRate: 10.75,
    // show: function(){ // wrong steps
    //     console.log(sbiBank);
    // }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}

let axisBank = {
    bankName: "Axis",
    location: "Bajirao Road, Pune",
    account: 4597863258,
    ifsc: "AXIS4567893",
    interestRate: 12.5,
    // show: function(){ // wrong steps
    //     console.log(axisBank);
    // }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}

let hdfcBank = {
    bankName: "HDFC",
    location: "Sinhgad road",
    accounct: 4593587569,
    ifsc: "HDFC000489",
    intesestRate: 11.79,
    // show: function(){ // wrong steps
    //     console.log(hdfcBank);
    // }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}
let yesBank = {
    bankName: "Yes Bank",
    location: "Kothrud Pune",
    account: 4568792581,
    ifsc: "YESB0214597",
    interestRate: 14.5,
    // show: function(){ // wrong steps
    //     console.log(yesBank);
    // }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }

}

console.log("========== Using objects ==========");
console.log(sbiBank);
console.log(axisBank);
console.log(hdfcBank);
console.log(yesBank);

// sbiBank.show(); // wrong steps
// axisBank.show();
// hdfcBank.show();
// yesBank.show();

console.log("");
console.log("========== Using showDetails function ==========");

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
