'use strict';

let circular = require('./').circular;

// Easily O(n) with memoization
  // Can we eliminate memo?

function loopDetection(list) {
  if (!list.next) { return false; }
  let slow = list;
  let fast = list;

  // Need to check fast and fast.next because fast COULD potentially be null
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { break; }
  }

  if (!fast.next || !fast) { return false; }

  while (fast !== list) {
    fast = fast.next;
    list = list.next;
  }

  return fast;
}

let start = Date.now();
console.log('Solution: ', loopDetection(circular));
console.log('  Elapsed time: ', Date.now() - start, 'ms');