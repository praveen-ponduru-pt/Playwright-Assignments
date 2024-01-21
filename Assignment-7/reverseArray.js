let weights = [75.6, 25.4, 52.4, 52.4, 65.8, 19.1];


function reverseArray(array) {

    let reversedArray = [];
    for (let iter = array.length; iter > 0; iter--) {

        reversedArray.push(array.pop());
    }
    return reversedArray;
}

console.log(reverseArray(weights));