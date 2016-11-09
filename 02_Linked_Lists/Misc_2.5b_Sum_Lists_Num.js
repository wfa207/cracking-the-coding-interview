// ===========================================================================
// Returning an actual number
// ===========================================================================

function sumListsInc(list1, list2) {
  if (!list1 || !list2) { return false; }
  function toNum(head) {
    let counter = 0;
    let sum = 0;
    while (head) {
      sum += head.data * Math.pow(10, counter);
      counter++;
      head = head.next;
    }
    return sum;
  }
  return toNum(list1) + toNum(list2);
}

let start = Date.now();
console.log('sumListsInc: ', sumListsInc(sumNode, sumNode), ' VS ', 2*126);
console.log('  Elapsed time: ', Date.now() - start);

let iterations = 0;
function sumListsDec(list1, list2) {
  if (!list1 || !list2) { return false; }
  function toNum(list) {
    let counter = 0;
    function iterator(node) {
      iterations++;
      if (!node) { return 0; }
      let sum = iterator(node.next) + (node.data * Math.pow(10, counter));
      counter++;
      return sum;
    }
    return iterator(list);
  }
  return toNum(list1) + toNum(list2);
}

start = Date.now();
console.log('sumListsDec: ', sumListsDec(sumNode, sumNode), ' VS ', 2*621);
console.log('  Elapsed time: ', Date.now() - start);
console.log('  Iterations: ', iterations);