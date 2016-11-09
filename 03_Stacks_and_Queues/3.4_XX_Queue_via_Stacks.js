'use strict';

function MyQueue() {
  this.orig = [];
  this.reverse = [];
}

// We don't need to transfer items back and forth between reverse and main
// We just need to add elements onto main EXCLUSIVELY and shift to reverse when
// it's empty AND we're looking for something
(function(objProto) {
  objProto.push = function(data) {
    this.orig.push(data);
    return this;
  };

  objProto.pop = function() {
    if (!this.reverse.length) { this.reverseStacks(); }
    if (this.reverse.length) { return this.reverse.pop(); }
    return null;
  };

  objProto.peek = function() {
    if (!this.reverse.length) { this.reverseStacks(); }
    if (!this.reverse.length) { return null; }
    return this.reverse[this.reverse.length - 1];
  };

  objProto.reverseStacks = function() {
    while (this.orig.length) {
      let temp = this.orig.pop();
      this.reverse.push(temp);
    }
  };

})(MyQueue.prototype);

let queue = new MyQueue();
queue.push(1).push(2).push(3).push(4).push(5).push(6).push(7).push(8);
console.log('Queue: ', queue);
let pop = queue.pop();
console.log('Pop: ', pop);
console.log('Peek: ', queue.peek());
