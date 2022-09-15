var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.storageLength = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageLength] = value;
  this.storageLength++;
  return this.storage;
};

stackMethods.pop = function() {
  if (this.storageLength > 0) {
    var lastElement = this.storage[this.storageLength - 1];
    delete lastElement;
    this.storageLength--;
    return lastElement;
  }
};

stackMethods.size = function() {
  return this.storageLength;
};

