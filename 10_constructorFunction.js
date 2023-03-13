// Constructor function

function Person(fullName, city){
    this.fullName = fullName;
    this.city = city;
    this.show = function(){ //function as value
        console.log(`${this.fullName} ${this.city}`);
    }
}
Person.prototype.country = "India";

const dhoni = new Person("MS Dhoni", "Ranchi");
dhoni.show();
console.log(dhoni.country);

const gill = new Person("Shubam Gill", "Mumbai");
gill.show();
console.log(gill.country);

const ash = new Person("R Ashwin", "Chenai");
ash.show();
console.log(ash.country);

const date = new Date(); // bult in object
console.log(date);
console.log(typeof date);

const result = Math.pow(2,3); // bult in object
console.log(result);