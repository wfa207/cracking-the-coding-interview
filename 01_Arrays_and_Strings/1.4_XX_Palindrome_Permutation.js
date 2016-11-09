'use strict';

let trueInput = 'Tact Coa';
let trueInput2 = 'Racecar';
let falseInput = 'hello';

function palinPerm(str) {
  let memo = {};
  let numOdd = 0;
  for (let i = 0; i < str.length; i++) {
    let thisChar = str[i].toLowerCase();
    if (thisChar !== ' ') {
      if (!memo[thisChar]) { memo[thisChar] = 1; }
      else { memo[thisChar]++; }
    }
  }
  for (let key in memo) {
    let thisVal = memo[key];
    if (thisVal % 2 !== 0) { numOdd++; }
    if (numOdd > 1) { return false; }
  }
  return true;
}

console.log('True Input: ', palinPerm(trueInput));
console.log('False Input: ', palinPerm(falseInput));

// Previous implementation slightly optimized
// No need to go through the keys of the object after we go through the string

function palinPermOp(str) {
  let numOdd = 0;
  let memo = {};
  if (str.length < 2) { return false; }
  for (let i = 0; i < str.length; i++) {
    let thisChar = str[i].toLowerCase();
    if (thisChar !== ' ') {
      if (!memo[thisChar]) { memo[thisChar] = 1; }
      else { memo[thisChar]++; }
      (memo[thisChar] % 2 === 0) ? numOdd-- : numOdd++;
    }
  }
  return numOdd < 2;
}

console.log('True Input: ', palinPermOp(trueInput));
console.log('False Input: ', palinPermOp(falseInput));