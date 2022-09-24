

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valuePerIndex = this._storage.get(index);

  if (valuePerIndex !== undefined) {
    // if the key exists, override the value
    var overridden = false;
    for (var i = 0; i < valuePerIndex.length; i++) {
      if (valuePerIndex[i][0] === k) {
        valuePerIndex[i][1] = v;
        overridden = true;
      }
    }
    //Otherwise, push the new key value into the storage[index] array
    if (overridden === false) {
      valuePerIndex.push([k, v]);
    }
  } else {
    this._storage.set(index, [[k, v]]);
  }
  // if there is something there, append v to current list
  // set v = old v + new v
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valuePerIndex = this._storage.get(index); // [ [cat, happy], [fox, quick] ]
  if (valuePerIndex !== undefined) {
    for (var i = 0; i < valuePerIndex.length; i++) {
      if (valuePerIndex[i][0] === k) {
        return valuePerIndex[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(value, key, storage) {
    if (key === index) {
      storage.splice(key, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions? O(1)
 */


