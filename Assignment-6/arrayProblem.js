nums = [0, 1, 0, 3, 12];

function updateArray(array) {
    let lengthOfArray = array.length;
    for (iter = 0; iter < array.length; iter++) {

        if (array.at(iter) == 0) {
            array.splice(iter, 1);
            iter--;
        }
        else
            continue;
    }
    if (array.length != lengthOfArray) {
        while (array.length != lengthOfArray)
            array.push(0);
    }
    return array;
}

console.log(updateArray(nums));