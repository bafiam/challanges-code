const { cornsilk } = require("color-name");

/**
Linked list node
each node has a head and tail
head contain the node value
tail is a pointer to next node
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
/**
 *LinkedList class
 has a add node 
 has a get node by index 
 */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  /**
   *create a node
   *check if the head is null so no other headers
   *if that is the case set the new node in the head
   *if not, loop through the list to the last node
   */
  add(value) {
    let node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }
  /**
   *
   * @param {*number} index
   * given an position
   * loop until that position starting from 0
   * return the value of the position
   */
  fetch(index) {
    let start = 0;
    let current = this.head;
    while (start < index && current.nextNode !== null) {
      current = current.nextNode;
      start++;
    }
    if (current !== null) {
      return current.value;
    }
  }
  /**
   *
   * @param {*number} index
   * @param {*any} item
   * given the index position
   * get previous position => loop through to that index-1
   * get current position of given index
   * create the new node with the given item
   * in case the head is null set the new node
   * if index is 0,so inset at the head
   * create a copy of the head
   * assign the new node to the original head
   * set the cop as original head tail
   * incase index is > 0
   * copy the current position node given index
   * set the new node as the tail of the previous node
   * set the current cop as the tail of the new node added to the previous
   */
  add_at(index, item) {
    let previous_node = this.get_node(index - 1);
    let current_node = this.get_node(index);
    if (previous_node !== undefined && current_node !== undefined) {
      let node = new ListNode(item);
      if (this.head === null) {
        this.head = node;
      }
      if (index === 0) {
        let copy = this.head;
        this.head = node;
        let current = this.head;
        current.nextNode = copy;
      } else {
        let copy_current = current_node;
        previous_node.nextNode = node;
        node.nextNode = copy_current;
      }
    }
  }
  get_node(index) {
    let idx = 0;
    let current = this.head;
    while (current !== null && idx < index) {
      current = current.nextNode;
      idx++;
    }
    if (current !== null) {
      return current;
    }
  }
  /**
   *
   * @param {number} index
   * delete a node at index
   * get node before the index
   * get node after the index
   * set before next node to after node
   */
  remove(index) {
    if (index === 0) {
      let after = this.get_node(index + 1);
      this.head = after;
    } else {
      let previous = this.get_node(index - 1);
      let current = this.get_node(index);
      previous.nextNode = current.nextNode;
    }
  }
}

list = new LinkedList();

list.add(3);
list.add(5);
list.add(6);
list.add(8);
// list.add_at(0, 10);
// list.add_at(1, 20);
// console.log(list.fetch(3));
// console.log(list.get_node(1));
list.remove(0);

console.log(list);
