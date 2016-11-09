'use strict';

function BinarySearchTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  this.size = 1;
}

(function(objProto) {
  objProto.direction = function(num) {
    return num <= this.data ? 'left' : 'right';
  };

  objProto.addNodeTo = function(direction, data) {
    let currNode = this;
    while (currNode[direction]) {
      currNode = currNode[direction];
    }
    currNode[direction] = new BinarySearchTree(data);
    return this;
  };

  objProto.addNum = function(num) {
    let direction = this.direction(num);
    this.size++;
    if (this[direction]) { this[direction].addNum(num); }
    else { this[direction] = new BinarySearchTree(num); }
    return this;
  };

  objProto.contains = function(num) {
    let direction = this.direction(num);
    if (this.data === num) { return true; }
    if (this[direction]) { return this[direction].contains(num); }
    return false;
  };

  objProto.traverseInOrder = function(cb) {
    if (this.left) { this.left.traverseInOrder(cb); }
    cb(this);
    if (this.right) { this.right.traverseInOrder(cb); }
  };

  objProto.traversePreOrder = function(cb) {
    cb(this);
    if (this.left) { this.left.traverseInOrder(cb); }
    if (this.right) { this.right.traverseInOrder(cb); }
  };

  objProto.traversePostOrder = function(cb) {
    if (this.left) { this.left.traverseInOrder(cb); }
    if (this.right) { this.right.traverseInOrder(cb); }
    cb(this);
  };

  objProto.search = function(data, cb) {
    let direction = this.direction(data);
    if (this[direction].data === data) { return cb(this[direction], this, direction); }
    if (!this[direction]) { return null; }
    return this[direction].search(data, cb);
  };

  objProto.delete = function(data) {
    let result = this.search(data, function(node, parent, direction) {
      return {parent: parent, node: node, direction: direction};
    });
    if (!result) { return null; }
    let parent = result.parent, node = result.node, direction = result.direction;
    if (!node.left && !node.right) { parent[direction] = null; }
    else if (node.left && node.right) {
      let repNode = node.right, repParent = parent;
      while (repNode.left) {
        repParent = repNode;
        repNode = repNode.left;
      }
      let repDirection = repParent.left === repNode ? 'left' : 'right';
      repParent[repDirection] = null;
      repNode.left = node.left, repNode.right = node.right;
      parent[direction] = repNode;
    } else {
      let repNode = node.left ? node.left : node.right;
      parent[direction] = repNode;
    }
    return node;
  };

})(BinarySearchTree.prototype);

let BST = new BinarySearchTree(5);
BST.addNum(4).addNum(10).addNum(7).addNum(8).addNum(19).addNum(5).addNum(2).addNum(3).addNum(20);
module.exports = BinarySearchTree;