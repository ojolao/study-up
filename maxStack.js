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
