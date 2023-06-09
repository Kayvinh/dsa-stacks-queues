const { LinkedList, Node } = require("./linkedlist");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  constructor() { 
    this._ll = new LinkedList(); 
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if(!this.size) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last = newNode;
    this._ll.push(newNode);
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.size) {
      throw new Error("Queue is empty!");
    }

    let result = this.first;

    this._ll.shift(this.first);
    this.size -= 1;
    return result.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.size) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
// module.exports = Node;
