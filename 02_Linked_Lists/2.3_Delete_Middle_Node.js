'use strict';

let head = require('./').head;
let midNode = require('./').midNode;

function delMidNode(node) {
  if (!node.next) {
    throw new Error('This is the last node in the Linked List!');
  } else {
    node.data = node.next.data;
    node.next = node.next.next;
  }
}

delMidNode(midNode);
console.log(head);