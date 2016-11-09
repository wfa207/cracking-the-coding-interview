'use strict';

function BinarySearchTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

(function(objProto) {
  objProto.addNode = function(data) {
    if (data) {
      let direction = data > this.data ? 'right' : 'left';
      if (this[direction]) { this[direction].addNode(data); }
      else { this[direction] = new BinarySearchTree(data); }
    }
  };
})(BinarySearchTree.prototype);

function minimalTree(arr, start, end) {
  if (!arr.length || end < start) { return null; }
  if (start === undefined) { start = 0; }
  if (end === undefined) { end = arr.length - 1; }
  let mid = Math.floor((start + end) / 2);
  let newNode = new BinarySearchTree(arr[mid]);
  newNode.right = minimalTree(arr, mid + 1, end);
  newNode.left = minimalTree(arr, start, mid - 1);
  return newNode;
}

let evenArr = [3, 6];
let oddArr = [3, 6, 9];
let fiveArr = [3, 6, 8, 9, 10];
console.log('BST: ', minimalTree(fiveArr));