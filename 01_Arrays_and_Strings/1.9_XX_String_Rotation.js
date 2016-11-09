'use strict';

function strRotation(str1, str2) {
  let baseStr = str1 + str1;
  if (str1.length !== str2.length) { return false; }
  let isSubString = str2.isSubStringOf(baseStr);
  return isSubString;
}

String.prototype.isSubStringOf = function(str) {
  return str.indexOf(this) !== -1;
};

let str1 = 'waterbottle';
let str2 = 'erbottlewat';

console.log(strRotation(str1, str2));