const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.firstElem = null;
    this.secondElem = null;
  }
  getUnderlyingList() {
    return this.firstElem
  }

  enqueue(value) {
    if (!this.firstElem) {
      this.firstElem = new ListNode(value);
    } else if (!this.secondElem) {
      const newElem = new ListNode(value);

      this.firstElem.next = newElem;
      this.secondElem = newElem;
    } else {
      const newElem = new ListNode(value);

      this.secondElem.next = newElem;
      this.secondElem = newElem;
    }
  }

  dequeue() {
    if (!this.firstElem) return;
    const result = this.firstElem.value;
    const nextElem = this.firstElem.next;
    this.firstElem = (nextElem) ? nextElem : null
    return result;
  }
}

module.exports = {
  Queue,
};
