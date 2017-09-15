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
    console.log('size before', this.size);
    this.storage[this.size++] = value;
    console.log('size after', this.size, 'storage', this.storage);
  }
  pop() {
    if (this.size){
      const value = this.storage[--this.size];
      delete this.storage[this.size];
      return value;
    }
  }
  length() {
    return this.size;
  }
}


