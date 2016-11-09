'use strict';

const Tree = require('./BinarySearchTree');
let tree1 = new Tree(5).addNum(4).addNum(10).addNum(7).addNum(8).addNum(19).addNum(5).addNum(2).addNum(3).addNum(20);
let tree2 = new Tree(4).addNum(5).addNum(2).addNum(4);

function matchFinder(t1, t2) {
  if (!t2) { return true; }
  if (!t1) { return false; }
  if (t1.data === t2.data) {
    if (matchTrees(t1, t2)) { return true; }
  }
  return matchFinder(t1.left, t2) || matchFinder(t1.right, t2);
}

function matchTrees(t1, t2) {
  if (!t1 && !t2) { return true; }
  if (!t1 || !t2) { return false; }
  if (t1.data !== t2.data) { return false; }
  return matchTrees(t1.left, t2.left) && matchTrees(t1.right, t2.right);
}

console.log('TREE MATCH: ', matchFinder(tree1, tree2));