var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //{0: 'a', 1: 'b'}
  var storage = {};
  var storageLength = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storageLength] = value;
    storageLength++;
    return storage;
  };

  someInstance.pop = function() {
    if (storageLength > 0) {
      var lastElement = storage[storageLength - 1];
      delete storage[storageLength - 1];
      storageLength--;
      return lastElement;
    }
  };

  someInstance.size = function() {
    return storageLength;
  };

  return someInstance;
};
