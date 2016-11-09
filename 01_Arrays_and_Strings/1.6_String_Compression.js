'use strict';

function strCompressor(str) {
  if (str.length === 0) { return false; }
  let outputArr = [];
  let counter = 1;
  for (var i = 0; i < str.length; i++) {
    let thisChar = str[i];
    let nextChar = str[i + 1];
    if (thisChar === nextChar) {
      counter++;
    } else {
      outputArr.push(counter + thisChar);
      counter = 1;
    }
  }
  let outputStr = outputArr.join('');
  if (outputStr.length < str.length) { return outputStr; }
  return str;
}

console.log(strCompressor('aaabcd'));