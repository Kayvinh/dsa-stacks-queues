// const Node = require("./queue");

class Node {
    val = null;
    next = null;
  
    constructor(val) {
      this.val = val;
    }
}

class LinkedList {
    head = null;
    tail = null;
    length = 0;
  
    constructor(vals = []) {
      for (let val of vals) this.push(val);
    }
  
    // bee is current 
      // if current !== null, make current current.next;
    // vals = ["bee", "ant", "caterpillar", "mosquito"]
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      let newNode = new Node(val);
      this.length += 1;
  
      if (this.head === null) this.head = newNode;
      
      if (this.tail !== null) this.tail.next = newNode;
  
      this.tail = newNode;
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
      this.length += 1;
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      //let response = this.tail;
      let current = this.head;
      let secondToLastNode = this.head;
  
      if (current === null) {
        throw new Error('This list is empty!')
      }
  
      
      // Traversing
      while (current.next) {
        secondToLastNode = current;
        current = current.next;
      }
      
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      
      
      this.length -= 1;
  
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
  
      return current.val;
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      if(!this.length) {
        throw new Error('This list is empty!');
      }
  
      let current = this.head;
      this.head = current.next;
      this.length -= 1;
  
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
  
      return current.val
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
      if(idx < 0 || idx > this.length - 1) {
        throw new Error('Invalid index');
      }
  
      let current = this.head;
  
      for(let i = 0; i < idx; i++) {
        current = current.next;
      }
  
      return current.val;
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
      if(idx < 0 || idx > this.length - 1) {
        throw new Error('Invalid index');
      }
  
      let current = this.head;
      for(let i = 0; i < idx; i++) {
        current = current.next;
      }
  
      current.val = val;
      return current.val;
    }
}

module.exports = {LinkedList, Node};