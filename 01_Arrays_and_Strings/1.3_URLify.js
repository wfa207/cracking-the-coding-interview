'use strict';

// Using Regular Expressions -- longer runtime (approximately O(2^n) based on Deterministic Finite Automoton method)

function RegExURLify(str) {
  return str.trim().replace(/[\s]+/gi, '%20');
}

console.log(RegExURLify('Mr John Smith   '));

// 
function URLify(str) {
  let outputArr = [];
  str = str.trim();
  for (var i = 0; i < str.length; i++) {
    let thisChar = str[i];
    if (thisChar === ' ') { outputArr.push('%20'); }
    else { outputArr.push(thisChar); }
  }
  return outputArr.join('');
}

console.log(URLify('Mr John Smith   '));