/**
 * TreeNode
 * has default value and children
 * has zero to many children
 */
class TreeNode {
  constructor(value){
    this.value = value;
    this.children = []
  }
}


// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

/**
 * abe will be the root node
 * homer will be a child of abe
 * bart, lisa and maggie will be children if homer
 * console.log abe as is the root node
 */

 abe.children.push(homer);
 homer.children.push(bart,lisa,maggie)

 console.log(abe)