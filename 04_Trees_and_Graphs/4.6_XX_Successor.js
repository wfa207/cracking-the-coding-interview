'use strict';

// If we're at the root node, we need to traverse right
// if we're at a child node and it's left, we need to traverse right OR back to the parent (if the right was already visited)
// if we're at a child node and it's right, we need to traverse right OR back 
// NEEDED TO ACCOUNT FOR CASE WHERE NODE IS TO THE RIGHT OF PARENT
function successor(node) {
  let currNode;
  if (node.right) {
    currNode = node.right;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode;
  }
  else if (node.parent) {
    currNode = node;
    let currParent = currNode.parent;
    while (currParent && currParent.left !== currNode) {
      currNode = currNode.parent;
      currParent = currNode.parent;
    }
    return currParent || false;
  }
  return false;
}

const BST = function(data, parent, left, right) {
  this.data = data;
  this.parent = parent || null;
  this.left = left || null;
  this.right = right || null;
};

let node1 = new BST(5);
let node2 = new BST(7, node1);
let node3 = new BST(3, node1);
let node4 = new BST(9, node2);
let node5 = new BST(2, node3);
let node6 = new BST(4, node3);
let node7 = new BST(6, node2);
let node8 = new BST(8, node4);
let node9 = new BST(8, node8);
node1.left = node3;
node1.right = node2;
node2.left = node7;
node2.right = node4;
node3.left = node5;
node3.right = node6;
node4.left = node8;
node8.right = node9;

let node = node9
console.log('SUCCESSOR of node' + node.data,  successor(node));