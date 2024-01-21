let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,';

function reverseString(string) {

    let reversedString = [];
    for (let iter = string.length - 1; iter >= 0; iter--) {

        reversedString += string.at(iter);
    }
    return reversedString;
}

console.log(reverseString(loremIpsum));
