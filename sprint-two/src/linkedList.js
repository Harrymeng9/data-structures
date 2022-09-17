var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create new node from the passed in value
    var newNode = new Node(value);
    // If it's the first node in the list, update the head
    if (list.head === null) {
      list.head = newNode; //12
    }
    // If it's the first node in the list, update the tail
    if (list.tail === null) {
      list.tail = newNode;
    } else {
      // If there already elements in the list,
      // Update the current tail's next to reference the newNode
      list.tail.next = newNode;
      // Update the tail to reference the newNode
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // Save a reference to the previous head
    var prevHead = list.head;
    // if prevHead is null, return null
    if (prevHead === null) {
      return null;
    } else {
      // Update the head to point to previous head's next node, which is the new head
      list.head = list.head.next;
      // Return the previous head value
      return prevHead.value;
    }
  };

  list.contains = function(target) {
    // Start with head, check value to see if matches target
    // debugger;
    var currNode = list.head;
    if (currNode.value === target) {
      return true;
    }
    // Go through the rest of the elements, check value to see if matches target
    while (currNode !== null) {
      if (currNode.value === target) {
        return true;
      } else {
        currNode = currNode.next;
      }
    }
    // If went through full list and no match, return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
