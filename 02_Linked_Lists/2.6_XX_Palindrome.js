'use strict';
let Node = require('./').Node;
let palinNode = require('./').palinNode;

// ====================================================================================
// RECURSIVE SOLUTION
// ====================================================================================

// Check if linked list IS a palindrome
  // Recurse to tail; compare to head
function palindrome(head) {
  Node.prototype.length = function() {
    let size = 0;
    let head = this;
    while (head) {
      size++;
      head = head.next;
    }
    return size;
  };

  function Result(node, palin) {
    this.node = node;
    this.palin = palin || true;
  }

  function recurse(head, len) {
    if (!head || len <= 0) { return new Result(head); }
    if (len === 1) { return new Result(head.next); }
    let compare = recurse(head.next, len - 2);
    if (head.data.toLowerCase() !== compare.node.data.toLowerCase()) { compare.palin = false; }
    else { compare.node = compare.node.next; }
    return compare;
  }

  let len = head.length();
  return recurse(head, len).palin;
}

let start2 = Date.now();
console.log('Recursive: ', palindrome(palinNode));
console.log(' Elapsed time: ', Date.now() - start2, 'ms');

// ====================================================================================
// RECURSIVE SOLUTION
// ====================================================================================

function palindromeIter(head) {
  let slow = head;
  let fast = head;
  let nodes = [];

  // Need to check fast and fast.next because fast COULD potentially be null
  while (fast && fast.next) {
    nodes.push(slow);
    slow = slow.next;
    fast = fast.next.next;
  }
  
  if (fast) { slow = slow.next; }

  while (nodes.length && slow) {
    if (nodes.pop().data.toLowerCase() !== slow.data.toLowerCase()) { return false; }
    slow = slow.next;
  }
  return true;
}

let start = Date.now();
console.log('Iterative: ', palindromeIter(palinNode));
console.log(' Elapsed time: ', Date.now() - start, 'ms');