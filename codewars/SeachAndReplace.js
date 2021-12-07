const numArr = [[1, 1, 1], [1, 1, 0], [1, 1, 1]];
let num = [];
let rowIndex = null;
let columnIndex = null;
for (let i = 0; i < numArr.length; i++) {
  for (let j = 0; j < numArr[i].length; j++) {
    if (numArr[i][j] === 0) {
      rowIndex = numArr.indexOf(numArr[i]); // row index == 1
      columnIndex = numArr[i].indexOf(numArr[i][j]); // column index == 2
      break;
    }
  }
  if (rowIndex && columnIndex) {
    break;
  }
}

for (let i = 0; i < numArr.length; i++) {
  if (rowIndex === numArr.indexOf(numArr[i])) {
    for (let j = 0; j < numArr[i].length; j++) {
      numArr[i][j] = 0;
    }
  } else {
    numArr[i][2] = 0;
  }
}
console.table(numArr)
