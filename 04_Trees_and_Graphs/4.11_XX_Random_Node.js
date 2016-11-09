'use strict';

const BinarySearchTree = require('./BinarySearchTree');
let tree = new BinarySearchTree(5).addNum(4).addNum(10).addNum(7).addNum(8).addNum(19).addNum(5).addNum(2).addNum(3).addNum(20);

BinarySearchTree.prototype.getRandNode = function() {
  let idx = 1 + Math.floor(Math.random() * this.size);
  return this.getIthNode(idx);
};

BinarySearchTree.prototype.getIthNode = function(idx) {
  let leftSize = this.left ? this.left.size : 0;
  if (idx === leftSize + 1) { return this; }
  if (idx <= leftSize) {
    return this.left.getIthNode(idx);
  } else {
    return this.right.getIthNode(idx - leftSize - 1);
  }
};

console.log('Random Node: ', tree.getRandNode());
