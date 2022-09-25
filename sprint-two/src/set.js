var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // If item is not in the object, then add it
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions? O(1)
 */
