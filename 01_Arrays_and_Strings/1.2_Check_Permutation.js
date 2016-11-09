'use strict';

// Using memoization, we can determine if the two strings have the same characters;

let falseStr1 = 'hello';
let falseStr2 = 'whate';
let trueStr1 = 'tacocat';
let trueStr2 = 'cattaco';

function checkPerm(str1, str2) {
  // If the strings differ in length, we can return false
  if (str1.length !== str2.length) { return false; }
  let memo = {};
  for (let i = 0; i < str1.length; i++) {
    let thisChar = str1[i];
    if (!memo[thisChar]) { memo[thisChar] = 1; }
    else { memo[thisChar]++; }
  }
  for (let j = 0; j < str2.length; j++) {
    let thisChar = str2[j];
    if (!memo[thisChar]) { return false; }
    memo[thisChar]--;
    if (memo[thisChar] < 0) { return false; }
  }
  return true;
}

console.log('False: ', checkPerm(falseStr1, falseStr2));
console.log('True: ', checkPerm(trueStr1, trueStr2));