'use strict';

let LinkedList = require('../utils/LinkedList');

function AnimalShelter() { LinkedList.call(this); }

AnimalShelter.prototype = Object.create(LinkedList.prototype);

(function(objProto) {
  objProto.dequeueCat = function() {
    let node = this.head;
    while (node && node.data.type !== 'C') {
      node = node.next;
    }
    if (node && node.data.type === 'C') {
      if (node.next) { node.next.before = node.before; }
      if (node.before) { node.before.next = node.next; }
      if (node === this.head) { this.head = this.head.next; }
      if (node === this.tail) { this.tail = this.tail.before; }
      return node;
    }
    return null;
  };

  objProto.dequeueDog = function() {
    let node = this.head;
    while (node && node.data.type !== 'D') {
      node = node.next;
    }
    if (node && node.data.type === 'D') {
      if (node.next) { node.next.before = node.before; }
      if (node.before) { node.before.next = node.next; }
      if (node === this.head) { this.head = this.head.next; }
      if (node === this.tail) { this.tail = this.tail.before; }
      return node;
    }
    return null;
  };

  objProto.dequeueAny = objProto.dequeue;

  objProto.constructor = AnimalShelter;
})(AnimalShelter.prototype);

let thisShelter = new AnimalShelter();
thisShelter.enqueue({type: 'D', name: 'Frederick'}).enqueue({type: 'C', name: 'Akuti'}).enqueue({type: 'D', name: 'Booger'}).enqueue({type: 'C', name: 'Piggy'}).enqueue({type: 'D', name: 'Daisy'}).enqueue({type: 'C', name: 'Sherman'});
thisShelter.dequeueCat();
console.log('After Dequeuing Dog: ', thisShelter);