

// Instantiate a new graph
var Graph = function () {
  // Use an object to represent the graph
  this._g = {};
  /*
  {1: [2,5],
   2: [3,5],
   3: [2,4],
   4: [3,5,6],
   5: [1,2,4],
   6: [4]
  }
  */

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  var nodeString = node.toString();
  this._g[nodeString] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  var nodeString = node.toString();
  return Object.keys(this._g).indexOf(nodeString) !== -1;
};



// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var fromNodeString = fromNode.toString();
  // Look in g for fromNode
  // If the list for fromNode contains toNode value, return true
  return this._g[fromNodeString].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  var fromNodeString = fromNode.toString();
  var toNodeString = toNode.toString();
  this._g[fromNodeString].push(toNode);
  this._g[toNodeString].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  var fromNodeString = fromNode.toString();
  var toNodeString = toNode.toString();

  var removeFromNodeIndex = this._g[fromNodeString].indexOf(toNode);
  this._g[fromNodeString].splice(removeFromNodeIndex, 1);

  var removeToNodeIndex = this._g[toNodeString].indexOf(fromNode);
  this._g[toNodeString].splice(removeToNodeIndex, 1);

};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  // remove the edge from all objects in the node's edge list
  // get the list of nodes attached to node
  // for each of the nodes attached to node, removeEdge(node, attachednode)
  var nodeString = node.toString();
  // this.removeEdge(node, 5);

  for (var i = 0; i < this._g[nodeString].length; i++) {
    this.removeEdge(this._g[nodeString][i], node);
  }

  // remove the node from g
  delete this._g[nodeString];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  // go through each of the nodes in g
  for (var n in this._g) {
  // apply cb function to each of the nodes
    cb(n);
  }
};

/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */


