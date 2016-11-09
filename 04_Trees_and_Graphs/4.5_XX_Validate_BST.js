'use strict';

// The solution below DOES NOT take into account the fact that ALL nodes on the left
// must be <= the root node and ALL nodes on the right must be > the root node
function validateBST(BST) {
  if (!BST) { return true; }
  if (BST.left) {
    if (BST.left.data > BST.data) { return false; }
  }
  if (BST.right) {
    if (BST.right.data <= BST.data) { return false; }
  }

  return validateBST(BST.left) && validateBST(BST.right);
}

const BinarySearchTree = require('./BinarySearchTree'); 

let BST = new BinarySearchTree(5);
BST.addNum(3).addNum(7).addNum(2).addNum(4).addNum(6).addNum(8);
// BST.addNum(3).addNum(7).addNum(2).addNum(4).addNum(6).addNum(8).addNodeTo('right', 1);

console.log('VALIDATE: ', validateBST(BST));

function validateBST2(BST, min, max) {
  if (!BST) { return true; }
  if (min || max) {
    if (min && BST.data < min || max && BST.data >= max) {
      return false;
    }
  }
  return validateBST2(BST.left, min, BST.data) && validateBST2(BST.right, BST.data, max);
}

console.log('BST: ', BST);
console.log('CORRECT SOLUTION: ', validateBST2(BST, null, null));

function isBST(BST, min, max) {
  if (!BST) { return true; }
  if (min || max) {
    if (min && BST.data < min || max && BST.data >= max) { return false; }
  }
  return isBST(BST.left, min, BST.data) && isBST(BST.right, BST.data, max);
}

console.log('FINAL IMPLEMENTATION: ', isBST(BST));