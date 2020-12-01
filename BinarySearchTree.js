/**
 * Binary Search tree hv a max of two nodes and left < root && right > root
 * Node has the root and a container to hold the children
 * Left and right getter helpers to fetch the children
 * Right and left setter helpers to set/change the children
 */
class TreeNode {
  constructor(value = null) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  get left() {
    return this.children[0];
  }
  get right() {
    return this.children[1];
  }
  set left(data) {
    this.children[0] = data;
    if (data) {
      data.parent = this;
    }
  }
  set right(data) {
    this.children[1] = data;
    if (data) {
      data.parent = this;
    }
  }
}
/**
 * will have a size pointer to keep track if the tree size
 */
class BinarySearchTree {
  constructor(value = null) {
    this.root = value;
    this.size = 0;
  }
  /**
   * insert a node
   * check if root is null, if so insert the newNode in the tree
   * else, loop through to the end and
   */
  insert(data) {
    const newNode = new TreeNode(data);
    if (this.root) {
      let findPosition = this.findNode(data);
      if (data > findPosition.value) {
        findPosition.right = newNode;
      } else {
        findPosition.left = newNode;
      }
    } else {
      this.root = newNode;
    }
    this.size += 1;
    // return this;
  }
  /**
   * Helper function
   * given a value, check in the existing tree the correct side and position to
   * add the new node
   */
  findNode(value) {
    let current = this.root;
    let lookUp;
    while (current) {
      lookUp = current;
      if (value >= current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return lookUp;
  }
  /**
   *
   * find a node given the value
   * loop through the entire tree checking right and left
   * if current value in the loop is = the given value, break
   * return that node
   */
  find(value) {
    let current = this.root;
    let found;
    while (current) {
      found = current;
      if (current.value === value) {
        break;
      }

      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    if (found.value === value) {
      return found;
    } else {
      return false;
    }
  }
  // combineLeftIntoRightSubtree(node) {
  //   if (node.right) {
      
  //   }
  // }
  // delete(value) {
  //   const nodeToRemove = this.find(value);
  //   if (!nodeToRemove) return false;
  //   this.combineLeftIntoRightSubtree(nodeToRemove);
  // }
 
}
class Traverse {
  constructor(data) {
    this.data = [];
  }
  /**
   * In-order traversal
   * visit nodes on this order
   * 1. visit all left
   * 2. visit the root
   * 3. visit the right.
   */
  inOrderTraversal(node) {

    if (node != null) {
      this.inOrderTraversal(node.left);
      this.data.push(node.value);
      this.inOrderTraversal(node.right);
    }
    return this.data;
  }
}

let tree = new BinarySearchTree();
let data = [30, 40, 10, 15, 12, 50, 35];
data.forEach((element) => {
  tree.insert(element);
});
tree.insert(2);
// tree.insert(7);
// console.log(tree.find(40));
traverseNode = new Traverse()
console.log(traverseNode.inOrderTraversal(tree.root));
