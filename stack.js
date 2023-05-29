const { Node } = require('./linkedlist')
/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  constructor() { 
    this._array = [];
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    this._array.push(newNode);
   
    newNode.next = this.top;
    this.size += 1;
    this.top = newNode;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.size) {
      throw new Error('This stack is empty.')
    }
    const result = this.top;
    this._array.pop();
    this.size -= 1;
    return result.val;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.size) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
