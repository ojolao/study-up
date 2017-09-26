/*
You have a linked list ↴ and want to find the kkth to last node.
Write a function kthToLastNode() that takes an integer k and the headNode of a singly-linked
list, and returns the kth to last node in the list.

*/
function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode('Devil\'s Food');
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// returns the node with value 'Devil's Food' (the 2nd to last node)
/* Constraints: O(n) time
             O(1) space
*/

function kthToLastNode(k, node) {
  let count = 1;
  let current = node;
  while (current) {
    count += 1;
    current = current.next;
  }
  // nodeToReturn is count - k;
  let nodeToReturn = count - k;
  current = node; // a
  while (nodeToReturn > 1) {
    nodeToReturn -= 1;
    current = current.next;
  }
  return current;
}
