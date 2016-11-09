'use strict';

let numHead = require('./').numHead;

// This implementation will take about 
function partition(head, num) {
  let prevNode = head;
  let currNode = prevNode;
  while (currNode) {
    if (currNode.data < num) {
      // Delete currNode from head; previous node should stay the same
      prevNode.next = currNode.next;
      // Prepend currNode to head (head)
      currNode.next = head;
      // Reset head to the deleted node
      head = currNode;
    } else {
      // We'll need to shift prevNode ahead ONLY if we didn't change the list; otherwise it remains the same
      prevNode = prevNode.next;
    }
    // At this point, currNode is the head;, we have to keep currNode one ahead of the previous node
    currNode = prevNode.next;
  }
  return head;
}

console.log('partition: ', partition(numHead, 5));

// function partitionTwo(head, num) {
//   let prevNode = head;
//   while (prevNode.next) {
//     if (prevNode.next.data < num) {
//       let currNode = prevNode.next; // this is NEEDED to SAVE this value, otherwise the garbage collector will pick it up
//       prevNode.next = prevNode.next.next // reference to prevNode.next is erased
//       // head = prevNode.next.next OR prevNode.next => we can't do this!!
//       currNode.next = head;
//       head = currNode;
//     } else {
//       prevNode = prevNode.next;
//     }
//     prevNode.next = prevNode.next.next;
//   }
// }

// function partitionThree(head, num) {
//   let prevNode = head;
//   while (prevNode.next) {
//     if (prevNode.next.data < num) {
//       // prepends the head with the current node // CAN'T re-assign head first(lose ability to reference head)
//       prevNode.next.next = head;
//       // resets the head to the current node
//       head = prevNode.next;
//     } else {
//       // if the value > num, then we can shift up the previous node (and the current concurrently)
//       prevNode = prevNode.next;
//     }
//     prevNode.next = prevNode.next.next
//   }
// }