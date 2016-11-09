'use strict';

const LinkedList = require('../utils/LinkedList');
const Node = require('./Graph').Node;

function routeLink(nodeA, nodeB) {
  if (!nodeA || !nodeB) { throw new Error('Invalid Node!')}
  nodeA.visited = true;
  let queue = new LinkedList().enqueue(nodeA);
  while (queue.head) {
    let thisNode = queue.dequeue().data;
    if (thisNode === nodeB) { return true; }
    for (let i = 0; i < thisNode.children.length; i++) {
      let thisChild = thisNode.children[i];
      if (!thisChild.visited) { 
        thisChild.visited = true;
        queue.enqueue(thisChild);
      }
    }
  }
  return false;
}

let nodeA = new Node('nodeA');
let nodeB = new Node('nodeB');
let nodeC = new Node('nodeC');
let nodeD = new Node('nodeD');
let nodeE = new Node('nodeE');
let nodeF = new Node('nodeF');
let nodeG = new Node('nodeG');
let nodeH = new Node('nodeH');
let nodeI = new Node('nodeI');
nodeA.addChildren(nodeB, nodeC, nodeE);
nodeB.addChildren(nodeD, nodeE);
nodeC.addChildren(nodeG, nodeH);
console.log('Route Link: ', routeLink(nodeA, nodeI));