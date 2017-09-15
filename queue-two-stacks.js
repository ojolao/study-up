/* Implement a queue ↴ with 2 stacks. Your queue should have an enqueue and a
dequeue function and it should be "first in first out" (FIFO). Optimize for
the time cost of m function calls on your queue. These can be any mix of
enqueue and dequeue calls.

OR

 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.

*/

class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  push(value) {
    this.storage[this.size++] = value;
  }
  pop() {
    if (this.size) {
      const value = this.storage[--this.size];
      delete this.storage[this.size];
      return value;
    }
    return undefined;
  }
  length() {
    return this.size;
  }
}

class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  enqueue(value) {
    this.inbox.push(value);
  }
  // dequeue--
  dequeue() {
  // if this.outbox is empty, pop inbox until it's empty
    if (this.outbox.length() === 0) {
      while (this.inbox.length() > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
    if (this.outbox.length() > 0) {
      return this.outbox.pop();
    }
    return undefined;
  }
  length() {
    return this.inbox.size + this.outbox.size;
  }
}
