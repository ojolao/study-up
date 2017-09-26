/* Hooray! It's opposite day. Linked lists go the opposite way today.
Write a function for reversing a linked list. ↴ Do it in-place. ↴

Your function will have one input: the head of the list.

Your function should return the new head of the list.

Here's a sample linked list node class:

  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }

   * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
*/

const reverseList = (node) => {
  let current = node;
  let prev = null;
  let nextNode = null;
  while (current) {
    // capture next node
    nextNode = current.next;
    // assign previous
    current.next = prev;
    // move to next node
    prev = current;
    current = nextNode;
  }
  return prev;
};
