'use strict';

function Graph() {
  this.nodes = [];
}

(function(objProto) {
  objProto.addNode = function(node) {
    this.nodes.push(node);
    return this;
  };

  objProto.addNodes = function() {
    let args = [].slice.apply(arguments);
    if (args.length) {
      args.forEach(node => this.nodes.push(node));
    }
    return this;
  };

})(Graph.prototype);

function Node(name) {
  this.name = name;
  this.children = [];
} 

(function(objProto) {
  objProto.addChild = function(node) {
    this.children.push(node);
  };

  objProto.addChildren = function() {
    let args = [].slice.apply(arguments);
    if (args.length) {
      args.forEach(node => this.children.push(node));
    }
    return this;
  };

})(Node.prototype);

module.exports = {
  Graph,
  Node
};