'use strict';

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function Node(data, previous, next) {
  this.previous = previous || null;
  this.next = next || null;
  this.data = data;
}

(function(objProto) {
  objProto.addToTail = function(data) {
    if (!data) { return null; }
    let newNode = new Node(data, this.tail);
    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.size++;
    return this;
  };

  objProto.removeFromTail = function() {
    if (!this.tail) { return null; }
    let removedTail = this.tail;
    this.tail = this.tail.previous;
    if (this.tail) { this.tail.next = null; }
    else { this.head = null; }
    this.size--;
    return removedTail;
  };

  objProto.addToHead = function(data) {
    if (!data) { return null; }
    let newNode = new Node(data, null, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.previous = newNode;
      this.head = this.head.previous;
    }
    this.size++;
    return this;
  };

  objProto.removeFromHead = function() {
    if (!this.head) { return null; }
    let removedHead = this.head;
    this.head = this.head.next;
    if (this.head) { this.head.previous = null; }
    else { this.tail = null; }
    this.size--;
    return removedHead;
  };

})(LinkedList.prototype);

function BinaryTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

(function(objProto) {
  objProto.addNode = function(data) {
    let newTree = new BinaryTree(data);
    let direction = data > this.data ? 'right' : 'left';
    if (this[direction]) { this[direction].addNode(newTree); }
    else { this[direction] = newTree; }
    return this;
  };

})(BinaryTree.prototype);

let BT = new BinaryTree(5);
BT.addNode(7).addNode(3).addNode(4).addNode(2).addNode(8).addNode(6).addNode(9).addNode(1);


// Breadth-First Traversal
// *INTERESTING* CASE OF PASSING BY REFERENCE:
  // If we actually mutate the parents linked list, the reference to current
  // in the results array gets modified as well since parents still references 
  // the object passed to results, even though the VARIABLE current has been
  // reset to a new LinkedList, so instead, we have to simply iterate through
  // the parents, and then redefine the parent definition with each iteration
  // of the outer loop
  
function listDepths(binaryTree) {
  if (!binaryTree) { return null; }
  let current = new LinkedList().addToHead(binaryTree);
  let result = [];
  while (current.size) {
    result.push(current);
    let parent = current.head.data;
    current = new LinkedList();
    while (parent) {
      if (parent.left) { current.addToTail(parent.left); }
      if (parent.right) { current.addToTail(parent.right); }
      parent = parent.next;
    }
  }
  return result;
};

console.log('Breadth First List Depths: ', listDepths(BT));

function listDepthDF(binaryTree, result, idx) {
  result = result || [];
  idx = idx || 0;
  if (!result[idx]) { result.push([]); }
  result[idx].push(binaryTree);
  if (binaryTree.left) { listDepthDF(binaryTree.left, result, idx + 1); }
  if (binaryTree.right) { listDepthDF(binaryTree.right, result, idx + 1); }
  return result;
}

console.log('Depth-First Depth List: ', listDepthDF(BT));