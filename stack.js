class Stack {
  constructor() {
    this.arr = [];
  }

  push(arg) {
    this.arr.push(arg);
  }
  pop() {
    this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

let stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.pop();
console.log(stack);
console.log(stack.peek());

module.export = Stack;
