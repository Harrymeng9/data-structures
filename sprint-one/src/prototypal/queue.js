var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.storageKey = 0;
  someInstance.dequeueKey = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.storageKey] = value;
  this.storageKey++;
  return this.storage;
};

queueMethods.dequeue = function () {
  if (this.storageKey - this.dequeueKey > 0) {
    var lastElement = this.storage[this.dequeueKey];
    delete lastElement;
    this.dequeueKey++;

    return lastElement;
  }

};

queueMethods.size = function () {
  return this.storageKey - this.dequeueKey;
};
