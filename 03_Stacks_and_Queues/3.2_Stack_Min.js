'use strict';

function StackMin() {
  this.minArray = [];
  this.stack = [];
}

(function(objProto) {
  objProto.push = function(data) {
    if (!this.minArray.length) { this.minArray.push(data); }
    else if (data <= this.minArray[this.minArray.length - 1]) { this.minArray.push(data); }
    this.stack.push(data);
    return this;
  };

  objProto.pop = function() {
    if (!this.stack.length) { return null; }
    let last = this.peekStack();
    let lastMin = this.peekMin();
    if (last === lastMin) { this.minArray.pop(); }
    return this.stack.pop();
  };

  objProto.peekStack = function() {
    if (!this.stack.length) { return null; }
    return this.stack[this.stack.length - 1];
  };

  objProto.peekMin = function() {
    if (!this.stack.length) { return null; }
    return this.minArray[this.minArray.length - 1];
  };
})(StackMin.prototype);

let stack = new StackMin();
stack.push(2).push(2).push(3).push(4).push(5).push(1).push(7).push(8);
console.log('Min Stack: ', stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log('Min Stack (after pop): ', stack);
