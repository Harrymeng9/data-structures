var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.storageLength = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.storageLength] = value;
  this.storageLength++;
  return this.storage;
};

Stack.prototype.pop = function () {
  if (this.storageLength > 0) {
    var lastElement = this.storage[this.storageLength - 1];
    delete lastElement;
    this.storageLength--;
    return lastElement;
  }
};

Stack.prototype.size = function () {
  return this.storageLength;
};

// Instantiating the Class Stack
var SomeInstance = new Stack();



