const person = {
    fullName: "MS Dhoni",
    age: 38
}

Object.freeze(person);
person.city = "Ranchi";// updating key and values

const player = person;