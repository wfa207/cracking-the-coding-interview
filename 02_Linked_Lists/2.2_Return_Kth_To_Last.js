'use strict';

let head = require('./').head;

// Using two pointers
function kthToLastDub(LL, k) {
  let p1 = LL, p2 = LL;
  for (let i = 0; i < k; i++) {
    if (p2.next) { p2 = p2.next; }
    else { return false; }
  }
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

console.log(kthToLastDub(head, 3));