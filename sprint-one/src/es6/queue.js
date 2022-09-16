class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageKey = 0;
    this.dequeueKey = 0;
  }

  enqueue(value) {
    this.storage[this.storageKey] = value;
    this.storageKey++;
    return this.storage;
  }

  dequeue() {
    if (this.storageKey - this.dequeueKey > 0) {
      var firstElement = this.storage[this.dequeueKey];
      delete this.storage[this.dequeueKey];
      this.dequeueKey++;
      return firstElement;
    }
  }

  size() {
    return this.storageKey - this.dequeueKey;
  }
}

var SomeInstance = new Queue();
