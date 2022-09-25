var BinarySearchTree = function (value) {
  var newBST = {};

  newBST.left;
  newBST.right;
  newBST.value = value;

  _.extend(newBST, BSTMethod);
  return newBST;
};

var BSTMethod = {};

BSTMethod.insert = function (value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BSTMethod.contains = function (value) {
  if (value === this.value) {
    return true;
  }

  if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    }
  } else {
    if (this.right) {
      return this.right.contains(value);
    }
  }
  return false;
};

BSTMethod.depthFirstLog = function (callback) {
  //callback the current value
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions? O(logn)
 */
