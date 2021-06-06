const newArray = [200, 203, 2003, 333, 12].filter((val) => val > 12)
// console.log(newArray)

const totalSum = [10, 1, 2, 3, 4].reduce((prev, current, _) => prev + current)
// console.log(totalSum)


function Matrix(rows, cols) {
    var jaggedArray = new Array(rows);
    for (let i = 0; i < cols; i += 1) {
        jaggedArray[i] = new Array(rows);
    }
    return jaggedArray;
}

// console.log(Matrix(3, 3))

/* SPIRAL PRINT*/
let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];

function spiralPrint(M) {
    var topRow = 0,
        leftCol = 0,
        btmRow = M.length - 1,
        rightCol = M[0].length - 1;
    while (topRow < btmRow && leftCol < rightCol) {
        for (var col = 0; col <= rightCol; col++) {
            console.log(M[topRow][col]);
        }

        topRow++;

        for (var row = topRow; row <= btmRow; row++) {
            console.log(M[row][rightCol])
        }
        rightCol--;

        if (topRow <= btmRow) {
            for (var col = rightCol; col >= 0; col--) {
                console.log(M[btmRow][col]);
            }
            btmRow--;
        }

        if (leftCol <= rightCol) {
            for (var row = btmRow; row > topRow; row--) {
                console.log(M[row][leftCol]);
            }
            leftCol++;
        }
    }
}
spiralPrint(M);







