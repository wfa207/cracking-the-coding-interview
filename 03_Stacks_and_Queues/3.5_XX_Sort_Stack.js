'use strict';

// The goal is to either have a temp stack with the greatest at the top
// OR the original stack with the lowest at the top
// 12, 17, 4, 10, 3, 8, 5
// 12(t)
function SortStack() {
  this.stack = [];
}

(function(objProto) {
  objProto.push = function(data) {
    this.stack.push(data);
    return this;
  };

  objProto.pop = function() {
    return this.stack.pop();
  };

  objProto.peek = function() {
    return this.stack[this.stack.length - 1];
  };

  objProto.isEmpty = function() {
    return this.stack.length === 0;
  };

})(SortStack.prototype);

function sort(stack) {
  let temp = new SortStack();
  temp.push(stack.pop());
  while (!stack.isEmpty()) {
    let stackTop = stack.pop();
    while (stackTop < temp.peek() && !temp.isEmpty()) {
      stack.push(temp.pop());
    }
    temp.push(stackTop);
  }

  while (!temp.isEmpty()) {
    stack.push(temp.pop());
  }

  return stack;
}

let stack = new SortStack();
stack.push(5).push(8).push(3).push(10).push(4).push(17).push(12);

console.log('Stack: ', stack);
console.log('Sorted: ', sort(stack));
