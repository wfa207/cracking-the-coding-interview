'use strict';

let falseStr = 'icicle';
let trueStr = 'ice';

// With Memoization

// This is O(n) runtime given that you will be looping over the string once
// and the memo once
function isUniqueMemo(str) {
  let memo = {};
  for (let i = 0; i < str.length; i++) {
    let thisChar = str[i];
    if (!memo[thisChar]) { memo[thisChar] = 1; }
    else { memo[thisChar]++; }
  }
  for (let key in memo) {
    if (memo[key] > 1) {
      return false;
    }
  }
  return true;
}

console.log('Memoized False String: ', isUniqueMemo(falseStr));
console.log('Memoized True String: ', isUniqueMemo(trueStr));

// Without Memoization or Data Structures (O(n^2))

function isUnique(str) {
  for (let pointer1 = 0; pointer1 < str.length; pointer1++) {
    var pointer2 = pointer1 + 1;
    while (pointer2 < str.length) {
      if (str[pointer1] === str[pointer2]) {
        return false;
      }
      pointer2++;
    }
  }
  return true;
}

console.log('False String: ', isUnique(falseStr));
console.log('True String: ', isUnique(trueStr));

// Alternatively, we could sort the string upfront (approximately O(N*log(N)))

function isUniqueSort(str) {
  str = str.sort();
  for (let i = 0; i + 1 < str.length; i++) {
    let thisChar = str[i];
    let nextChar = str[i + 1];
    if (thisChar === nextChar) { return false; }
  }
  return true;
}

console.log('Sort False String: ', isUnique(falseStr));
console.log('Sort True String: ', isUnique(trueStr));