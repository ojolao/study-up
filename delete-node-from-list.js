/*
Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.
Constraint: O(1) time and O(1) space
The input could, for example, be the variable b below:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);
*/

// given the node to delete, reassign value to the next node and pointer to the next node's pointer

const deleteNode = (node) => {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    node.value = null;
    throw new Error("Can't delete the last node with this method!");
  }
}