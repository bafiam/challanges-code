/**
 * Binary tree node has a default value and children
 * has 0 to two children
 * the left and right child
 * parent will act as a pointer each time a child is added to the parent,
 */

const left = 0;
const right = 1;
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }
  get left() {
    return this.children[left];
  }
  set left(node) {
    this.children[left] = node;
    if (node) {
      node.parent = this;
    }
  }
  get right() {
    return this.children[right];
  }
  set right(node) {
    this.children[right] = node;
    if (node) {
      node.parent = this;
    }
  }
}

// create nodes with values

// test start
/** 
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
*/
// test end
/**
 * abe will be the root node
 * homer will be a child of abe
 * bart, lisa and maggie will be children if homer
 * console.log abe as is the root node
 */
// test 2 start
/** 
abe.left = homer;
abe.right = maggie;
homer.right = bart;
homer.left = lisa;
console.log(lisa);
*/
// test 2 end

// given an array create a binary tree
// arr = [1, 2, 3, 4, 5, 6, 6, 6, 6]

/**
 * i = 0
 * given an array, root is arr[i]
 * left will be ((2*i) + 1)
 * right will be ((2*i) + 2)
 */
const insert = (arr, root, i, len) => {
  if (i < len) {
    let temp = new TreeNode(arr[i]);
    root = temp;
    root.left = insert(arr, root, 2 * i + 1, len);
    root.right = insert(arr, root, 2 * i + 2, len);
    return root;
  }
};
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
  /**
   * post-order traverse
   * visit nodes on this order
   * 1. visit all left
   * 2. visit the right
   * 3. visit the parent
   */
  postOrderTraversal(node) {
    if (node != null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      this.data.push(node.value);
    }
    return this.data;
  }
  /**
   * pre-order traverse
   * visit nodes on this order
   * 1. visit parent
   * 2. visit the left
   * 3. visit the right
   */
  preOrderTraversal(node) {
    if (node != null) {
      this.data.push(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
    return this.data;
  }
}
const run = (arr) => {
  let len = arr.length;
  let i = 0;
  let root = null;
  root = insert(arr, root, i, len);
  return root;
};
let arr = [1, 2, 3, 4, 5, 6];
let test = run(arr);

let traverse = new Traverse();
// console.log("inOrderTraversal: ",traverse.inOrderTraversal(test));
// console.log("preOrderTraversal",traverse.preOrderTraversal(test));
console.log("postOrderTraversal",traverse.postOrderTraversal(test));

