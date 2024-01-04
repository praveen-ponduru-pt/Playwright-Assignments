exp1 = '[()]{}{[()()]()}';
exp2 = '[(])';

const openBraces = ['[', '{', '('];
const closeBraces = [']', '}', ')'];

function isBalanced(expression) {

    let stack = [];
    for (char of expression) {

        if (openBraces.includes(char)) {
            stack.push(char);
        }
        else if (closeBraces.includes(char)) {
            const indexOfChar = closeBraces.indexOf(char);

            if (openBraces.indexOf(stack.pop()) != indexOfChar) {

                return 'Not Balenced';
            }
        }
    }
    return 'Balanced';

}

console.log(isBalanced(exp1));
console.log(isBalanced(exp2));
