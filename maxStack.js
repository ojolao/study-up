/*
You want to be able to access the largest element in a stack.
You've already implemented the Stack class provided below.

Use this Stack class to implement a new class MaxStack with a function getMax() that returns the largest element in the stack. getMax() should not remove the item.

Your stacks will contain only integers. [bonus es6]
*/

function Stack() {
  // initialize an empty array
  this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function (item) {
  this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function () {
  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
    return null;
  }
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function () {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
};

class MaxStack {
  constructor() {
    this.minStorage = new Stack();
    this.maxStorage = new Stack();
    this.size = 0;
  }
// keep track of max
  // with every insert, you update max if needed;
  push(value) {
    if (this.size === 0 || this.minStorage.peek() <= value) {
      this.minStorage.push(value);
      this.size += 1;
    } else if (this.minStorage.peek() > value) {
      while (this.minStorage.peek() > value) {
        this.maxStorage.push(this.minStorage.pop());
      }
      this.minStorage.push(value);
      this.size += 1;
      while (this.maxStorage.peek()) {
        this.minStorage.push(this.maxStorage.pop());
      }
    }
  }
  pop() {
    this.size--;
    return this.minStorage.pop();
  }
  peek() {
    return this.minStorage.peek();
  }
  getMax() {
    return this.minStorage.peek();
  }
}
  // have to keep it sorted--peek at minStorage, if it's greater, push,
    // else, while it's smaller, pop into maxStorage, then push, then pop back;
  // always storing the max item at the end
  // with every pop, max gets automatically updated;
