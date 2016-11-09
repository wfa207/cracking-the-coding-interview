'use strict';

// This doesn't work because it only checks leaves, it doesn't count
// nodes with only one child in its process
let BinarySearchTree = require('./BinarySearchTree');

function checkBalanced(BST) {
  let max = null, min = null;
  function counter(BST, c) {
    if (!BST.left && !BST.right) {
      if (!min) { min = c; }
      else { min = c < min ? c : min; }
      if (!max) { max = c; }
      else { max = c > max ? c : max; }
    }
    if (BST.left) { counter(BST.left, c + 1); }
    if (BST.right) { counter(BST.right, c + 1); }
    return max - min <= 1;
  }
  return counter(BST, 1);
}

let BST = new BinarySearchTree(5);
BST.addNum(4).addNum(10).addNum(7).addNum(8).addNum(19).addNum(5).addNum(2).addNum(3).addNum(20);
