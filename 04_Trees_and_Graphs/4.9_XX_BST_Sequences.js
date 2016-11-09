'use strict';

const BinarySearchTree = require('./BinarySearchTree');
const LinkedList = require('./LinkedList');

let root = new BinarySearchTree(10);
root.addNum(7).addNum(13).addNum(5).addNum(8).addNum(15);

console.log('                          10');
console.log('                          / \\');
console.log('                         7  13');
console.log('                        / \\   \\');
console.log('                       5   8   15\n');

function getSequences(BST) {
  let result = [];
  if (!BST) {
    result.push(new LinkedList());
    return result;
  }

  let prefix = new LinkedList().addToHead(BST.data);
  let left = getSequences(BST.left);
  let right = getSequences(BST.right);
  for (let i = 0; i < left.length; i++) {
    let leftSeq = left[i];
    for (let j = 0; j < right.length; j++) {
      let rightSeq = right[j];
      interweave(leftSeq, rightSeq, result, prefix);
    }
  }
  return result;
}

function interweave(left, right, result, prefix) {
  if (!left.size || !right.size) {
    let weave = Object.create(prefix);
    if (left.size) { weave.addToTail(left); }
    if (right.size) { weave.addToTail(right); }
    return result.push(weave);
  }
  
  function iterator(side) {
    prefix.addToTail(side.removeHead());
    interweave(left, right, result, prefix);
    side.addToHead(prefix.removeTail());
  }

  iterator(left);
  iterator(right);
}

let solution = getSequences(root);
console.log('Sequences: ', solution);
console.log('  # of Permutations: ', solution.length);

// 2 <= 3 <= 5 => 6 => 7 => 8
// 5, 3, 2, 6, 7, 8
// 5, 3, 6, 2, 7, 8
// 5, 3, 6, 7, 2, 8
// 5, 3, 6, 7, 8, 2
// 5, 6, 