'use strict';

// 2 32-bit numbers, insert the second into the first
// The second number must start at the given index, but can end before the second index
// INPUTS: 2 32-bit numbers, 2 indices,

// Mask: -1 <<< j - i; Mask << i;
  // mask & M => clears slots j to i
// N <<< i => shifts N to line up with M
// M | M 

// let N = (22).toString(2);
// let M = (361).toString(2);
let N = 22;
let M = 361;

console.log('N: ' + N.toString(2));
console.log('M: ' + M.toString(2));
console.log((-1 << 2).toString(2));

function insert(num1, num2, idx1, idx2) {
  let ones = -1 >>> 0;
  console.log('ONES SHIFT 2: ' + (ones << 2).toString(2));
  let mask = (ones << (idx1 - idx2 + 1)).toString(2);
  console.log(mask);
}

insert(0, 0, 1, 6);