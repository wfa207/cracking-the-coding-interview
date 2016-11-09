'use strict';

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function LLNode(data, previous, next) {
  this.data = null;
  this.next = null;
  this.previous = null;
}

(function (objProto) {
  objProto.addToHead = function(data) {
    if (!data) { return null; }
    let newNode = new LLNode(data, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.previous = newNode;
      this.head = this.head.previous;
    }
    this.size++;
    return this.head;
  };
  
  objProto.addToTail = function(data) {
    if (!data) { return null; }
    let newNode = new LLNode(data, null, this.tail);
    if (!this.tail) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.size++;
    return this.tail;
  };

  objProto.removeFromHead = function() {
    if (!this.head) { return null; }
    let removedHead = this.head;
    this.head = this.head.next;
    if (!this.head) { this.tail = null; }
    else { this.head.previous = null; }
    this.size--;
    return removedHead;
  };

  objProto.removeFromTail = function() {
    if (!this.tail) { return null; }
    let removedTail = this.tail;
    this.tail = this.tail.previous;
    if (!this.tail) { this.head = null; }
    else { this.tail.next = null; } 
    this.size--;
    return removedTail;
  }

})(LinkedList.prototype);

function BinaryTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

(function(objProto) {
  objProto.addNode = function(num) {
    let direction = num > this.data ? 'right' : 'left';
    if (this[direction]) { this[direction].addNode(num); }
    else { this[direction] = new BinaryTree(num); }
    return this;
  };

  objProto.removeNode = function(num) {
    if (this.data === num) { return this.deleteNode(); }
    let currNode = this;
    let direction = num > currNode.data ? 'right' : 'left';
    while (currNode[direction]) {
      let parent = currNode;
      if (currNode[direction].data === num) { return currNode[direction].deleteNode(parent); }
      currNode = currNode[direction];
      direction = num > currNode.data ? 'right' : 'left';
    }
    return null;
  };

  objProto.deleteNode = function(parent) {
    let removedNode = this;
    let swapNode = null;
    if (this.left && this.right) {
      swapNode = this.right;
      let swapParent = this;
      if (!swapNode.left) { swapParent.right = swapNode.right; }
      else {
        while (swapNode.left) {
          swapParent = swapNode;
          swapNode = swapNode.left;
        }
        swapParent.left = swapNode.right;
      }
      swapNode.left = this.left;
      swapNode.right = this.right;
    }
    else { swapNode = this.right ? this.right : this.left; }
    if (parent) {
      let parentDirection = parent.left === this ? 'left' : 'right';
      parent[parentDirection] = swapNode;
    }
    return removedNode;
  };

})(BinaryTree.prototype);

let BT = new BinaryTree(5);
BT.addNode(7).addNode(3).addNode(4).addNode(2).addNode(8).addNode(6).addNode(9).addNode(1);
// console.log('==========ORIGINAL==========\n');
// console.log(BT);
// console.log(BT.removeNode(3));
// console.log('==========AFTER REMOVAL==========\n');
// console.log(BT);

// We have to loop in the below, since if we use pop, it will mutate
// the original array (what current and res refer to in memory)
// by looping and then resetting the current variable, we don't actually
// mutate the original array

// NOTE TO SELF: We can effectively use WHILE statements as IF statements
  // In the below, we check the length of current every time we loop
  // thus, we only push into result IF the current arr has elements in it
  
function listDepth(binaryTree) {
  let current = [binaryTree];
  let result = [];
  while (current.length) {
    result.push(current);
    let parents = current;
    current = [];
    for (var i = 0; i < parents.length; i++) {
      if (parents[i].left) { current.push(parents[i].left); }
      if (parents[i].right) { current.push(parents[i].right); }
    }
  }
  return result;
}

console.log(listDepth(BT));