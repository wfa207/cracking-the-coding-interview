'use strict';

let list1 = require('./').head;
let list2 = require('./').head2;

// ===============================================================
// NAIVE SOLUTION
// ===============================================================

// O(n^2) algorithm: check each node of LL2 for each node of LL1
function intersect(list1, list2) {
  let node1 = list1;
  while (node1) {
    let node2 = list2;
    while (node2) {
      if (node1 === node2) {
        return node1;
      }
      node2 = node2.next;
    }
    node1 = node1.next;
  }
  return false;
}

let start = Date.now();
console.log('Iterative: ', intersect(list1, list2));
console.log('  Elapsed time: ', Date.now() - start, 'ms');

// ===============================================================
// SUGGESTED SOLUTION
// ===============================================================

function intersectANS(list1, list2) {
  if (!list1 || !list2) { return false; }

  function getTailAndLength(list) {
    let size = 1;
    while (list.next) {
      size++;
      list = list.next;
    }
    return { node: list, len: size };
  }

  function matchLength(list, diff) {
    while (diff) {
      list = list.next;
      diff--;
    }
    return list;
  }

  let tailLen1 = getTailAndLength(list1);
  let tailLen2 = getTailAndLength(list2);
  let tail1 = tailLen1.node;
  let len1 = tailLen1.len;
  let tail2 = tailLen2.node;
  let len2 = tailLen2.len;

  if (tail1 !== tail2) { return false; }
  
  if (len1 !== len2) {
    if (len1 > len2) { list1 = matchLength(list1, len1 - len2); }
    else { list2 = matchLength(list2, len2 - len1); }
  }
  
  while (list1 && list2) {
    if (list1 === list2) { return list1; }
    list1 = list1.next;
    list2 = list2.next;
  }
  return false;
}

start = Date.now();
console.log('Iterative: ', intersectANS(list1, list2));
console.log('  Elapsed time: ', Date.now() - start, 'ms');