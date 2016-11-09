'use strict';

let head = require('./').head;
// Memoized -- saves time; takes up more space

console.log('Original: ', head, '\n');

function removeDups(LL) {
  let prevNode = LL;
  let thisNode = prevNode.next;
  let memo = {[prevNode.data]: true};
  while (thisNode) {
    if (memo[thisNode.data]) {
      prevNode.next = thisNode.next;
    } else {
      memo[thisNode.data] = true;
      prevNode = prevNode.next;
    }
    thisNode = thisNode.next;
  }
  return LL;
}

console.log('Dups Removed: ', removeDups(head));