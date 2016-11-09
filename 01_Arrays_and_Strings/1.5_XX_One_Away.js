'use strict';

function oneAway(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  if (Math.abs(len1 - len2) > 1) { return false; }
  if (str1 === str2) { return 0; }
  let foundDiff = false;
  let p1 = 0, p2 = 0;
  let word1 = len1 < len2 ? str1 : str2;
  let word2 = len1 < len2 ? str2 : str1;
  while (p1 < word1.length && p2 < word2.length) {
    if (word1[p1] !== word2[p2]) {
      if (len1 === len2) {
        if (foundDiff) { return false; }
        foundDiff = true;
      } else {
        if (p1 !== p2) { return false; }
        p2++;
      }
    }
    p1++;
    p2++;
  }
  return 1;
}

console.log(oneAway('pal3', 'pale'));