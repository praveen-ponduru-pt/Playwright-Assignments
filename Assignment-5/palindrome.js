const prompt = require('prompt-sync')();

let num = prompt("Enter a number: ");
console.log((num.length + 1) / 2);

for (let iter = 0; iter <= Math.floor(num.length / 2); iter++) {

    if (num.at(iter) != num.at(-iter - 1)) {

        console.log('False');
        break;
    }
    else if (iter == Math.floor(num.length / 2)) {

        console.log('True');
    }
}
