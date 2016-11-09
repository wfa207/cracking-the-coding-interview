'use strict';

// Doing this in place

var arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

// Shifting the array in place
function rotateMatrix(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  if (rows !== cols) { return false; }
  for (let rowNum = 0; rowNum < Math.ceil(rows / 2); rowNum++) {
    for (let colNum = 0; colNum < Math.floor(cols / 2); colNum++) {
      let thisEl = arr[rowNum][colNum];
      arr[rowNum][colNum] = arr[colNum][cols - 1 - rowNum];
      arr[colNum][cols - 1 - rowNum] = arr[rows - 1 - rowNum][cols - 1 - colNum];
      arr[rows - 1 - rowNum][cols - 1 - colNum] = arr[rows - 1 - colNum][rowNum];
      arr[rows - 1 - colNum][rowNum] = thisEl;
    }
  }
  return arr;
}

console.log('Array in Place: \n', rotateMatrix(arr));

var arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

function rotateMatrixNew(arr) {
  var outputArr = [];
  let rows = arr.length;
  let cols = arr[0].length;
  if (rows !== cols) { return false; }
  for (let rowNum = 0; rowNum < arr.length; rowNum++) {
    let newRow = [];
    for (let colNum = 0; colNum < arr[rowNum].length; colNum++) {
      newRow.push(arr[colNum][cols - 1 - rowNum]);
    }
    outputArr.push(newRow);
  }
  return outputArr;
}

console.log('New Array: \n', rotateMatrixNew(arr2));