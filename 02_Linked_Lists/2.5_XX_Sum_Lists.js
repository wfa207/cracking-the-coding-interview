'use strict';

let sumNode = require('./').sumNode;
let Node = require('./').Node;

Node.prototype.length = function() {
  let counter = 0;
  let pointer = this;
  while (pointer) {
    counter++;
    pointer = pointer.next;
  }
  return counter;
};

// ===========================================================================
// Returning a Linked List
// ASCENDING DIGITS
// ===========================================================================

// Check if either list1 or list2 are undefined
  // set to 0 if so
// loop through both lists; 
// if sum > 10, carry over excess (%)

function sumListsNMInc(list1, list2) {
  if (!list1 && !list2) { return false; }
  let sumList, sumPointer, p1 = list1, p2 = list2, carry = 0;
  while (p1 || p2 || carry) {
    let num1 = p1 ? p1.data : 0;
    let num2 = p2 ? p2.data : 0;
    let sum = num1 + num2 + carry;
    // console.log('carry: ', carry, ' | sum(', num1, ' + ', num2,' + ', carry,'): ', sum);
    carry = sum > 9 ? 1 : 0;
    let sumNode = new Node(sum % 10, null);
    if (!sumList) {
      sumList = sumNode;
      sumPointer = sumList;
    } else {
      sumPointer.next = sumNode;
      sumPointer = sumPointer.next;
    }
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
  }
  return sumList;
}

console.log('\n=========== INCREMENTING ===========\n');
let start = Date.now();
console.log('Iterative: ', sumListsNMInc(sumNode, sumNode));
console.log('  Elapsed time: ', Date.now() - start, 'ms');

// Recursive Solution
  // need to recurse through both linked lists 
  // Will need inner iterator function to create new scope (keep sum node out of it)
  // Iterator can keep track of pointer and carry too
function sumListsNMIncRec(list1, list2) {
  function iterator(list1, list2, carry, sumNode) {
    if (!list1 && !list2 && !carry) { return; }
    let num1 = list1 ? list1.data : 0;
    let num2 = list2 ? list2.data : 0;
    let sum = num1 + num2 + carry;
    carry = sum > 9 ? 1 : 0;
    let newnode = new Node(sum % 10, null);
    if (sumNode) { sumNode.next = newnode; }
    let next1 = list1 ? list1.next : null;
    let next2 = list2 ? list2.next : null;
    iterator(next1, next2, carry, newnode);
    return newnode;
  }
  return iterator(list1, list2, 0);
}

start = Date.now();
console.log('\nRecursive: ', sumListsNMIncRec(sumNode, sumNode));
console.log('  Elapsed time: ', Date.now() - start, 'ms');

// ===========================================================================
// Returning a Linked List
// DESCENDING DIGITS
// ===========================================================================

console.log('\n=========== DECREMENTING ===========');

// Traverse lists, pushing to queue
  // Process queues to build sum and carry
function sumListsNMDec(list1, list2) {
  function stackBuilder(head) {
    let stack = [];
    while (head) {
      stack.push(head.data);
      head = head.next;
    }
    return stack;
  }

  let s1 = stackBuilder(list1);
  let s2 = stackBuilder(list2);

  let sumList, carry = 0;
  while (s1.length || s2.length || carry) {
    let num1 = s1.length ? s1.pop() : 0;
    let num2 = s2.length ? s2.pop() : 0;
    let sum = num1 + num2 + carry;
    carry = sum > 9 ? 1 : 0;
    sumList = new Node(sum % 10, sumList ? sumList : null);
  }
  return sumList;
}

start = Date.now();
console.log('\nIterative: ', sumListsNMDec(sumNode, sumNode));
console.log('  Elapsed time: ', Date.now() - start, 'ms');

// Recurse to last nodes, diff lengths?
  // Need to pad shorter list with 0's
// Need to return carry and sumNode to previous stacks
function sumListsNMDecRec(list1, list2) {

  let len1 = list1.length();
  let len2 = list2.length();
  let diff = Math.abs(len1 - len2);

  if (diff > 0) {
    let shortList = len1 > len2 ? list2 : list1;
    while (diff) {
      let zeroNode = new Node(0, shortList);
      shortList = zeroNode;
    }
    if (len1 > len2) { list2 = shortList; }
    else { list1 = shortList; }
  }

  function iterator(list1, list2) {
    if (!list1 && !list2) { return {sumNode: null, carry: 0}; }
    let sumObj = iterator(list1.next, list2.next);
    let carry = sumObj.carry;
    let sum = list1.data + list2.data + carry;
    carry = sum > 9 ? 1 : 0;
    let newNode = new Node(sum % 10, sumObj.sumNode);
    return { sumNode: newNode, carry: carry };
  }

  let sumList = iterator(list1, list2);
  if (sumList.carry) { sumList = new Node(sumList.carry, sumList.sumNode); }
  return sumList;
}

start = Date.now();
console.log('\nRecursive Decrementing Sum: ', sumListsNMDecRec(sumNode, sumNode));
console.log('  Elapsed time: ', Date.now() - start, 'ms');