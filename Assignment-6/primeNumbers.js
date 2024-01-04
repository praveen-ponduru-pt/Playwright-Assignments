const prompt = require('prompt-sync')();

let lowerLimit = parseInt(prompt('Enter lower limit: '));
let upperLimit = parseInt(prompt('Enter upper limit: '));

function isPrime(number) {

    for (let iter = 2; iter <= Math.sqrt(number); iter++) {
        if (number % iter == 0) {
            return false;
        }
        else {
            continue;
        }
    }
    if (number == 1) return false;
    return true;
}

function primeNumbers(lowerLimit, upperLimit) {

    for (let iter = lowerLimit; iter <= upperLimit; iter++) {
        if (isPrime(iter)) {
            console.log(iter);
        }
    }
}

primeNumbers(lowerLimit, upperLimit);