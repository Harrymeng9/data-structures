var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.storageKey = 0;
  this.dequeueKey = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.storageKey] = value;
  this.storageKey++;
  return this.storage;
};

Queue.prototype.dequeue = function () {
  if (this.storageKey - this.dequeueKey > 0) {
    var firstElement = this.storage[this.dequeueKey];
    delete firstElement;
    this.dequeueKey++;
    return firstElement;
  }
};

Queue.prototype.size = function () {
  return this.storageKey - this.dequeueKey;
};


var SomeInstance = new Queue();

