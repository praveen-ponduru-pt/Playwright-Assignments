
let lowerLimit = 2000;
let upperLimit = 3200;

for (let iter = lowerLimit; iter <= upperLimit; iter++) {

    if (iter % 7 == 0 && iter % 5 != 0) {
        console.log(iter);
    }
}