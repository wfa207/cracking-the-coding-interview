'use strict';

// ================================================
// SIMPLISTIC
// ================================================

function tripleStack(data1, data2, data3) {
  this.stack = [
    [data1],
    [data2],
    [data3]
  ];
}

// ================================================
// RECOMMENDED SOLUTION
// ================================================

function tripleStackConstructor(stackSize) {
  this.stacks = 3;
  this.stackSize = stackSize;
  this.values = new Array(this.stacks * this.stackSize);
  this.stackCapacities = new Array(stacks).map(el => this.stackSize);
  }