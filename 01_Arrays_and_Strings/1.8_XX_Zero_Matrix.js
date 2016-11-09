'use strict';
// If a single element is 0, row and column are set to 0

let testArr = [
  [3, 5, 0, 1, 2, 1, 5],
  [6, 3, 9, 1, 1, 6, 2],
  [7, 3, 7, 2, 9, 0, 2],
  [4, 3, 6, 2, 8, 2, 1],
  [7, 0, 2, 5, 3, 6, 1]
];

function zeroMatrix(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  if (!rows || !cols) { return false; }
  let zeroRow = new Array(cols).fill(0);
  let rowOneHasZero = false, colOneHasZero = false;
  if (arr[0][0] === 0) { 
    colOneHasZero = rowOneHasZero = true;
  } else {
    for (let i = 1; i < rows; i++) {
      if (arr[i][0] === 0) { colOneHasZero = true; }
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[0][j] === 0) { rowOneHasZero = true; }
        if (arr[i][j] === 0) {
          arr[0][j] = arr[i][0] = 0;
        }
      }
    }
  }

  for (let rowNum = 1; rowNum < rows; rowNum++) {
    if (arr[rowNum][0] === 0) { arr[rowNum] = zeroRow; }
  }

  for (let colNum = 1; colNum < cols; colNum++) {
    if (arr[0][colNum] === 0) {
      colNullifier(colNum);
    }
  }

  if (rowOneHasZero) { arr[0] = zeroRow; }
  if (colOneHasZero) {
    colNullifier(0);
  }

  function colNullifier(colIdx) {
    for (let i = 0; i < arr.length; i++) {
      arr[i][colIdx] = 0;
    }
  }

  return arr;
}

console.log(zeroMatrix(testArr));