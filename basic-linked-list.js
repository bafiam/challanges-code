class LinkedNode {
  constructor(data) {
    this.data = data;
    this.tail = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // Adding new data to the list
  add_node(data) {
    // create a new node
    const newNode = new LinkedNode(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      // / start out by looking at the first node
      let current = this.head;
      // follow `tail` links until you reach the end
      while (current.tail !== null) {
        current = current.tail;
      }
      // assign the node into the `tail` pointer
      current.tail = newNode;
    }
  }
  get(index){
    if (index > -1) {
      let current = this.head
      let index_position = 0
      while ((current.tail !== null )&& (index_position < index)) {
        current = current.tail;
        index_position++;
        
      }
      if (current !== null) {
        return current.data
        
      } else {
        return undefined
        
      }
      
    } else {
      return undefined;
      
    }
  }
}

const linked_list = new LinkedList();
linked_list.add_node(1);
linked_list.add_node(2);
linked_list.add_node(3);
linked_list.add_node("red");
linked_list.add_node("orange");
linked_list.add_node("yellow");

console.log(linked_list.get(3));
