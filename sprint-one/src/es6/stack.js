class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageLength = 0;
  }

  push(value) {
    this.storage[this.storageLength] = value;
    this.storageLength++;
    return this.storage;
  }

  pop() {
    if (this.storageLength > 0) {
      var lastElement = this.storage[this.storageLength - 1];
      delete this.storage[this.storageLength - 1];
      this.storageLength--;
      return lastElement;
    }
  }

  size() {
    return this.storageLength;
  }
}

var SomeInstance = new Stack();