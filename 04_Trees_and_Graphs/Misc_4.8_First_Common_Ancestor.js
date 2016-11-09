'use strict';

// We recursively traverse both sides of each node
// base case: return false when node == null
// if node is found, return true
// when both sides return 
function firstCommonAnc(node1, node2, tree) {
  let result = { node1: null, node2: null, ancestor: null };
  function traverse(node1, node2, tree) {
    if (!tree) { return; }
    if (tree.data === node1) { 
      console.log('TREE: ', tree);
      result.node1 = true; }
    if (tree.data === node2) {
      console.log('TREE: ', tree);
      result.node2 = true;
    }
    let left = traverse(node1, node2, tree.left);
    let right = traverse(node1, node2, tree.right);
    if (result.ancestor) { return; }
    if (result.node1 && result.node2) {
      result.ancestor = tree.data;
      console.log('NODE1 & NODE2 EXIST!: ', result);
      return;
    }
  }
  traverse(node1, node2, tree);
  return result.ancestor || null;
}

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
let tree7 = new BinaryTree(-7);//
let tree8 = new BinaryTree(9);//
let tree9 = new BinaryTree(57);//

treeRoot.addTo('right', tree2);
treeRoot.addTo('left', tree3);
tree2.addTo('left', tree4);
tree2.addTo('right', tree5);
tree4.addTo('left', tree6);
tree4.addTo('right', tree7);
tree6.addTo('left', tree8);
tree6.addTo('right', tree9);

console.log('COMMON ANCESTOR: ', firstCommonAnc(tree6.data, tree5.data, treeRoot));
