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

    if (lowerLimit < 0 && upperLimit < 0) {
        console.log("Please enter only positive values");
        return -1;
    }

    for (let iter = lowerLimit < 2 ? 2 : lowerLimit; iter <= upperLimit; iter++) {
        if (isPrime(iter)) {
            console.log(iter);
        }
    }
}

primeNumbers(lowerLimit, upperLimit);