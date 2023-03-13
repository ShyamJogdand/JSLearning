// prime is a number which is divisible by 1 or itself

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }        
    }
    return true;
}
let result = isPrime(7);
let res = result ? "Yes" : "No"
console.log(`Is 7 Prime Number ${res}`);

console.log(`Is 10 Prime Number: ${isPrime(10) ? "Yes" : "No"}`);