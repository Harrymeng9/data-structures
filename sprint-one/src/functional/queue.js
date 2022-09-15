var Queue = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  // Example {0:'a', 1: 'b'}
  var storage = {};
  var storageKey = 0;
  var dequeueKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storageKey] = value;
    storageKey++;
    return storage;
  };

  someInstance.dequeue = function() {
    // Dequeue it only if object Storage has property
    if (storageKey - dequeueKey > 0) {
      var firstElement = storage[dequeueKey];
      delete storage[dequeueKey];
      dequeueKey++;
      return firstElement;
    }
  };

  someInstance.size = function() {
    return storageKey - dequeueKey;
  };

  return someInstance;
};
