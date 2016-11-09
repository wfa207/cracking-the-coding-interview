'use strict';

// ======================================================
// WITH ARRAYS
// ======================================================

function SetOfStacks(stackCapacity) {
  this.stackCapacity = stackCapacity;
  this.stacks = [];
}

(function (objProto) {
  objProto.push = function(num) {
    if (!this.stacks.length) { this.stacks.push([num]); }
    else {
      let lastStack = this.getLastStack();
      if (lastStack.length === this.stackCapacity) { this.stacks.push([num]); }
      else { lastStack.push(num); }
    }
    return this;
  };

  objProto.pop = function() {
    let lastStack = this.getLastStack();
    let removed = lastStack.pop();
    if (!lastStack.length) { this.stacks.pop(); }
    return removed;
  };

  objProto.popAtIndex = function(idx) {
    let stackIdx = Math.ceil((idx + 1) / this.stackCapacity) - 1;
    let mod = (idx + 1) % this.stackCapacity;
    let elIdx = (mod === 0 ? this.stackCapacity : mod) - 1;
    let element = this.stacks[stackIdx].splice(elIdx, 1);
    this.shiftAndReplace(stackIdx);
    return element;
  };

  objProto.shiftAndReplace = function(stackIdx) {
    while (this.stacks[stackIdx + 1]) {
      let nextStack = this.stacks[stackIdx + 1];
      let removed = nextStack.shift();
      this.stacks[stackIdx].push(removed);
      stackIdx++;
    }
    if (!this.getLastStack().length) { this.stacks.pop(); }
  };

  objProto.getLastStack = function() {
    return this.stacks[this.stacks.length - 1];
  };

})(SetOfStacks.prototype);

let newStack = new SetOfStacks(5);
console.log('Using Arrays: ', newStack);
