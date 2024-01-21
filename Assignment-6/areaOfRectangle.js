const prompt = require('prompt-sync')();

function areaOfRectangle(length, width = 5) {
    return length * width;
}

let length = parseInt(prompt("Enter lenght of Rectangle: "));
let width = parseInt(prompt("Enter width of Rectangle: ")) || undefined;

console.log(areaOfRectangle(length, width));