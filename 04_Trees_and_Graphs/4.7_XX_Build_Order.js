'use strict';

const Graph = function() {
  this.nodes = {};
};

const Node = function(name) {
  this.dependents = {};
  this.name = name;
  this.numPrereqs = 0;
};

// let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
// let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
let projects = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let dependencies = [['f', 'b'], ['f', 'c'], ['f', 'a'], ['b', 'e'], ['a', 'e'], ['d', 'g']];

// Less efficient solution
const buildGraph = function(projects, dependencies) {
  let graph = new Graph();
  for (let i = 0; i < projects.length; i++) {
    let thisProj = projects[i];
    if (!graph.nodes[thisProj]) { graph.nodes[thisProj] = new Node(thisProj); }
  }
  for (let j = 0; j < dependencies.length; j++) {
    let thisDep = dependencies[j];
    let first = thisDep[0];
    let second = thisDep[1];
    let prereqNode = graph.nodes[first];
    let depNode = graph.nodes[second];
    if (!prereqNode || !depNode) { throw new Error('Project doesn\'t exist!'); }
    prereqNode.dependents[depNode.name] = depNode;
    depNode.numPrereqs++;
  }
  return graph;
};

const buildOrder = function(projects, dependencies) {
  let graph = buildGraph(projects, dependencies);
  let order = [];
  function addNonDependents(project, order) {
    if (!project.numPrereqs) { order.push(project.name); }
  }
  for (let projectName in graph.nodes) {
    addNonDependents(graph.nodes[projectName], order);
  }
  if (!order.length) { return null; }
  for (let i = 0; i < order.length; i++) {
    let thisProj = graph.nodes[order[i]];
    for (let depName in thisProj.dependents) {
      thisProj.dependents[depName].numPrereqs--;
      addNonDependents(thisProj.dependents[depName], order);
    }
  }
  return order;
};

console.log('ORDER: ', buildOrder(projects, dependencies));
