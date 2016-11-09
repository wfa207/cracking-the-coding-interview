'use strict';

const BinaryTree = function(data) {
  let newNode = new Node(data);
  this.left = null;
  this.right = null;
  this.data = newNode;
};

(function(objProto) {
  objProto.addTo = function(dir, tree) {
    this[dir] = tree;
  }
})(BinaryTree.prototype);

const Node = function(data) {
  this.data = data;
}

let treeRoot = new BinaryTree(5);//                                   5
let tree2 = new BinaryTree(4);//                                  6       4
let tree3 = new BinaryTree(6);//                                       1    10
let tree4 = new BinaryTree(1);//                                   21    -7
let tree5 = new BinaryTree(10);//                               9     57
let tree6 = new BinaryTree(21);//
let tree7 = new BinaryTree(-7);//                                     10
let tree8 = new BinaryTree(9);//                                  7       13
let tree9 = new BinaryTree(57);//                              5              16
let tree10 = new BinaryTree(98);//

treeRoot.addTo('right', tree2);
treeRoot.addTo('left', tree3);
tree2.addTo('left', tree4);
tree2.addTo('right', tree5);
tree4.addTo('left', tree6);
tree4.addTo('right', tree7);
tree6.addTo('left', tree8);
tree6.addTo('right', tree9);

function commonAnc(tree, n1, n2) {
  function Result(node, isAnces) {
    this.node = node;
    this.isAnces = isAnces;
  }
  function iterator(tree, n1, n2) {
    if (!tree) { return new Result(null, false); }
    if (tree === n1 && tree === n2) { return new Result(tree, true); }
    let left = iterator(tree.left, n1, n2);
    if (left.isAnces) { return left; }
    let right = iterator(tree.right, n1, n2);
    if (right.isAnces) { return right; }
    if (tree === n1 || tree === n2) {
      if (left.node || right.node) { return new Result(tree, true); }
      else { return new Result(tree, false); }
    }
    if (left.node && right.node) { return new Result(tree, true); }
    return left.node ? left : right;
  }
  let res = iterator(tree, n1, n2);
  return res.isAnces ? res.node : null;
}

console.log('OUTPUT: ', commonAnc(treeRoot, tree9, tree4));
