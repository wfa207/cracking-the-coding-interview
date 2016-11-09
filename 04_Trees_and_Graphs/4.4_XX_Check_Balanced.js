'use strict';

const BinarySearchTree = require('./BinarySearchTree'); 

function balanceChecker(BST) {
  function depthChecker(BST) {
    if (!BST) { return 0; }
    let right = BST.right;
    let left = BST.left;
    let leftHeight = depthChecker(left);
    if (leftHeight === false) { return false; }
    let rightHeight = depthChecker(right);
    if (rightHeight === false) { return false; }
    let diff = Math.abs(leftHeight - rightHeight);
    if (diff > 1) { return false; }
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  return !!depthChecker(BST);
}

let BST = new BinarySearchTree(5);
BST.addNum(3).addNum(7).addNum(2).addNum(4).addNum(6).addNum(8);

console.log('BALANCE CHECKER: ', balanceChecker(BST));