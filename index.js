class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      const nodeRemoved = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return nodeRemoved;
    } else {
      let currentNode = this.head;
      let secondToLast;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLast = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLast.next = null
      this.tail = secondToLast
      this.length
      const nodeRemoved = this.tail;
    }
  }
  
  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()){
        return null;
    }

    if (index === 0){
        return this.head;
    }

    if (index === this.length - 1) {
        return this.tail;
    }

    let currentNode = this.head;
    let iterator = 0;

    while(iterator < index) {
        iterator++;
        currentNode = currentNode.next;
    }

    return currentNode;
}
}

let list = new LinkedList();

list.push(4);
list.push(5);
list.push(6);
list.pop()
console.log(list);
