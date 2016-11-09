'use strict';

const BinarySearchTree = require('./BinarySearchTree');
let node1 = {data: 8};
let node2 = {data: 4};
let node3 = {data: -2};
let node4 = {data: 2};
let node5 = {data: 20};
let node6 = {data: -10};
let node7 = {data: -10};
let node8 = {data: 7};
let node9 = {data: 11};
let node10 = {data: 1};

node1.left = node2, node1.right = node4;//                    8
node2.left = node3, node2.right = node9;//              4           2
node4.left = node5, node4.right = node8;//          -2    11    20     7
node5.left = node6;//                                       -10      1
node6.right = node7;//                                          -10
node8.left = node10;

// Initial Solution
function numPathsWithSum(tree, num) {
  let counter = 0;
  function iterator(tree, sum) {
    if (!tree) { return; }
    sum += tree.data;
    if (sum === num) { counter++; }
    iterator(tree.left, sum);
    iterator(tree.right, sum);
  }
  iterator(tree, 0);
  return counter;
};

console.log(numPathsWithSum(node1, 10));

// Solution to list paths (not just count them) 
// How do can we optimally flip the array around if we're forced to loop backwards?
  // Our variable point is our end pointer | root is a fixed point
  // We need to be able to print the paths in order in an efficient manner (could use unshift, but that is an O(n) process)

function pathsWithSum(tree, num) {
  let path = [];
  let result = [];
  function buildPath(tree, tgt, level) {
    if (!tree) { return; }
    path[level] = tree;
    for (let i = level; i >= 0; i--) {
      // Be careful here, we hold the reference to currPath, so unshifting
      // EVEN after we push to result, will mutate the array inside the result array
      tgt -= path[i].data;
      if (tgt === 0) { 
        // Slicing prevents us from modifying the currPath array AFTER it
        // has already been pushed to the result
        result.push(path.slice(i, level + 1).map(el => el.data));
      }
    }
    buildPath(tree.left, num, level + 1);
    buildPath(tree.right, num, level + 1);
  }
  buildPath(tree, num, 0);
  return result;
}

console.log("Paths with Sum\n", pathsWithSum(node1, 10));

// Solution to list paths (starting with root)
// Same as above, but begins building from the root instead of having to loop
// at the recurisve calls

function pathsWithSumFromRoot(tree, num) {
  let result = [];

  function buildPath(tree, path, level, tgt) {
    if (!tree) { return; }
    path[level] = tree.data;
    tgt -= tree.data;
    if (tgt === 0) { result.push(path.slice()); }
    buildPath(tree.left, path, level + 1, tgt);
    buildPath(tree.right, path, level + 1, tgt);
  }

  function traverse(tree, num) {
    if (!tree) { return; }
    buildPath(tree, [], 0, num);
    traverse(tree.left, num);
    traverse(tree.right, num);
  }
  traverse(tree, num);
  return result;
}

console.log('Paths with Sum (Start @ root)\n', pathsWithSumFromRoot(node1, 10));

// Solution to count paths (starting with root) => O(n) time but also O(log n) space

function numPathsSum(tree, sum) {
  let numPaths = 0;
  function countPaths(tree, hash, rollingSum) {
    if (!tree) { return; }
    rollingSum += tree.data;
    hash[rollingSum] = !hash[rollingSum] ? 1 : hash[rollingSum] + 1;
    let diff = rollingSum - sum;
    numPaths += (hash[diff] || 0);
    countPaths(tree.left, hash, rollingSum);
    countPaths(tree.right, hash, rollingSum);
    hash[rollingSum]--;
    if (hash[rollingSum] === 0) { delete hash[rollingSum]; }
    return numPaths;
  }
  // Need to initialize hash with [0] set to 1;
  return countPaths(tree, {[0]: 1}, 0);
}

console.log('Number of Paths: ' + numPathsSum(node1, 10));