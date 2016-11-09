'use strict';

class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  addToHead(data) {
    let newHead = new Node(data, this.head);
    if (!this.head) { this.tail = newHead; }
    else { this.head.prev = newHead; }
    this.head = newHead;
    this.incrementSize();
    return this;
  }

  addToTail(data) {
    let newTail = new Node(data, null, this.tail);
    if (!this.tail) { this.head = newTail; }
    else { this.tail.next = newTail; }
    this.tail = newTail;
    this.incrementSize();
    return this;
  }

  removeHead() {
    let head = this.head;
    this.head = this.head ? this.head.next : null;
    if (this.head) { this.head.previous = null; }
    this.decrementSize();
    return head;
  }

  removeTail() {
    let tail = this.tail;
    this.tail = this.tail ? this.tail.previous : null;
    if (this.tail) { this.tail.next = null; }
    this.decrementSize();
    return tail;
  }

  incrementSize() {
    this.size++;
  }

  decrementSize() {
    if (this.size) { this.size--; }
  }
}

module.exports = LinkedList;
