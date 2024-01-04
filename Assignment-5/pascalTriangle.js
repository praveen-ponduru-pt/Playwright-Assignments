//     1 
//    1 1 
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
//1 5 10 5 1

let rows = 4;

// method for nCr
let C = (n, r) => {
    r = (n - r) < r ? (n - r) : r;
    let result = 1;
    for (let i = 1; i <= r; n--, i++) {
        result = result * n / i;
    }
    return result;
}

for (let iter = 1; iter <= rows; iter++) {

    let row = '';
    for (let space = rows - iter; space > 0; space--) {
        row += ' ';
    }

    let con = 1;
    for (let i = 1; i <= iter; i++) {
        row += ' ' + con;
        con = C(iter - 1, i);
    }
    console.log(row);

}
