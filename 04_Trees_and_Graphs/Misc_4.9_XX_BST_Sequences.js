'use strict';

const BinarySearchTree = require('./BinarySearchTree');

let root = new BinarySearchTree(10);
// root.addNum(7).addNum(13).addNum(5).addNum(16);
root.addNum(7).addNum(13).addNum(5).addNum(8)//.addNum(15);

console.log('                          10');
console.log('                          / \\');
console.log('                         7  13');
console.log('                        / \\   ');
console.log('                       5   8   \n');

function allSequences(BST) {
  let result = [];
  if (BST === null) {
    result.push([]);
    return result;
  }

  let prefix = [BST.data];
  let leftSeq = allSequences(BST.left);
  let rightSeq = allSequences(BST.right);
  console.log('NODE { data: ', BST.data, '}');

  for (let i = 0; i < leftSeq.length; i++) {
    let left = leftSeq[i];
    for (let j = 0; j < rightSeq.length; j++) {
      let right = rightSeq[j];
      let weaved = [];
      console.log('  LEFT: ', left, ' | RIGHT: ', right);
      weaveLists(left, right, weaved, prefix, 'root', 0);
      result = result.concat(weaved);
    }
  }
  // DELETE Should take out the root logic
  if (BST !== root) {
    console.log('  RESULT: ', result, '\n');
  }
  return result;
}

function weaveLists(first, second, results, prefix, direction, level) {
  let levelText = level ? ' LEVEL ' + level : '';
  console.log('    WEAVING ', direction.toUpperCase(), levelText, ':');
  console.log('      PREFIX: ', prefix, ' | FIRST: ', first, ' | SECOND: ', second);
  if (first.length === 0 || second.length === 0) {
    let result = prefix.slice();
    if (first.length) { result = result.concat(first); }
    if (second.length) { result = result.concat(second); }
    console.log('    RESULT: ', result);
    console.log('    .............. EXITING ', direction.toUpperCase(), levelText, '...............');
    console.log('==================================================================');
    results.push(result);
    return;
  }

  prefix.push(first.shift());
  weaveLists(first, second, results, prefix, 'left', level + 1);
  first.unshift(prefix.pop());
  console.log('    LEFT LEVEL ', level + 1, ' => ', direction.toUpperCase(), levelText)
  console.log('      PREFIX: ', prefix, ' | FIRST: ', first, ' | SECOND: ', second);

  prefix.push(second.shift());
  weaveLists(first, second, results, prefix, 'right', level + 1);
  second.unshift(prefix.pop());
  console.log('    RIGHT LEVEL ', level + 1, ' => ', direction.toUpperCase(), levelText)
  console.log('      PREFIX: ', prefix, ' | FIRST: ', first, ' | SECOND: ', second);
}

let sequences = allSequences(root);
console.log('\nAll Sequences:\n', sequences);
console.log('    # of Permutations: ', sequences.length);
