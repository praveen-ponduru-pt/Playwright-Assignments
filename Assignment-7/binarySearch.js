let midValue = (min, max) => Math.floor((min + max) / 2);

function isSorted(array) {

    for (let iter = 1; iter < array.length; iter++) {

        if (array.at(iter - 1) > array.at(iter))
            return false;
    }
    return true;
}

function binarySearch(sortedArray, targetInteger) {

    if (!isSorted(sortedArray)) {
        console.log("The Array is not sorted");
        return -1;
    }

    let arrayLength = sortedArray.length;
    midElementIndex = midValue(0, arrayLength - 1);

    for (start = 0, end = arrayLength - 1; sortedArray.at(midElementIndex) != targetInteger;) {

        midElementIndex = midValue(start, end);
        if (targetInteger < sortedArray.at(midElementIndex)) {

            end = end - 1;
        }
        else if (targetInteger > sortedArray.at(midElementIndex)) {

            start = midElementIndex + 1;
        }
        if (sortedArray.at(midElementIndex) != targetInteger && start == end) return -1;
    }
    if (sortedArray.at(midElementIndex) == targetInteger) return midElementIndex;
}

ascArray = [12, 16, 19, 25, 37, 38, 49, 51, 53, 99, 152];
console.log(binarySearch(ascArray, 16));
