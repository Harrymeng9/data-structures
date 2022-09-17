var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // Make the children an empty array
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // Turn the passed in value into a Tree
  var newChildTree = new Tree(value);
  // Add the Tree to the children array
  this.children.push(newChildTree);
};

treeMethods.contains = function (target) {
  // Base case: If tree's value = target, return true else false
  if (this.value === target) {
    return true;
  }
  // Recursive case: Check the value of each of the children
  for (var i = 0; i < this.children.length; i++) {
    // if childContainsTarget = true, then return true
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  // After going through the tree,
  // if everything returns false then target not found in tree so return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
