var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.storageKey = 0;
  someInstance.dequeueKey = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.storageKey] = value;
  this.storageKey++;
  return this.storage;
};

queueMethods.dequeue = function() {
  // Dequeue it only if object storage has property
  if (this.storageKey - this.dequeueKey > 0) {
    var firstElement = this.storage[this.dequeueKey];
    delete this.storage[this.dequeueKey];
    this.dequeueKey++;
    return firstElement;
  }
};

queueMethods.size = function() {
  return this.storageKey - this.dequeueKey;
};

