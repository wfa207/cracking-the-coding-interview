'use strict';

function Node(data, next) {
  this.data = data;
  this.next = next;
}

let node5 = new Node('hello', null);
let node4 = new Node ('hello', node5);
let node3 = new Node('goodbye', node4);
let node2 = new Node('adios', node3);
let head = new Node('hello', node2);
let node2b = new Node('different2', node3);
let head2 = new Node('different', node2b);

let circular5 = new Node('hello', null);
let circular4 = new Node ('hello', circular5);
let circular3 = new Node('goodbye', circular4);
let circular2 = new Node('adios', circular3);
let circular = new Node('hello', circular2);

circular5.next = circular3;

let numNode6 = new Node(3, null);
let numNode5 = new Node(1, numNode6);
let numNode4 = new Node(4, numNode5);
let numNode3 = new Node(3, numNode4);
let numNode2 = new Node(5, numNode3);
let numHead = new Node(6, numNode2);

let sumNode3 = new Node(1, null);
let sumNode2 = new Node(2, sumNode3);
let sumNode = new Node(6, sumNode2);

let palinNode7 = new Node('r', null);
let palinNode6 = new Node('a', palinNode7);
let palinNode5 = new Node('c', palinNode6);
let palinNode4 = new Node('a', palinNode5);
let palinNode3 = new Node('n', palinNode4);
let palinNode2 = new Node('n', palinNode3);
let palinNode = new Node('a', palinNode2);

module.exports = {
  Node, 
  head,
  head2,
  midNode: node3,
  numHead,
  sumNode,
  palinNode,
  circular
};