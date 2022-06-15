const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
 //Go left until next is null.
 if(!rootNode) return console.log("Stop!")
 let currNode = rootNode
 while(currNode.left){
  currNode = currNode.left
 }
 return currNode.val


}

function findMaxBST (rootNode) {

  if(!rootNode) return console.log("Stop!")
  let currNode = rootNode

  if(!currNode.right){
    return currNode.val
  }
    return findMaxBST(currNode.right)
}


/*  if(!rootNode) return console.log("Stop!")
  let currNode = rootNode

  if(currNode.right){
    return findMaxBST(currNode.right)
  }
  return currNode.val */


function findMinBT (rootNode) {
  let minVal = rootNode.val

  if(!rootNode) return console.log("Stop! You have violated the law.")

  let queue = [rootNode];

  while (queue.length) {
    let shiftedNode = queue.shift();
    if(shiftedNode.val < minVal){
      minVal = shiftedNode.val
    }
    if (shiftedNode.left) { queue.push(shiftedNode.left) }
    if (shiftedNode.right) { queue.push(shiftedNode.right) }
  }

  return minVal
}


  //Should I iteratively or recursively traverse??


  //Because it's not in order we have go through the entire tree.
  //And I want to keep a variable to know what "min" is.
  //We could use a traversal callback to ensure that we've walked through the entire tree.
  //So each time we visit a node, we do a comparison between that node and our "smallest" variable.
  //return the smallest num.

function findMaxBT (rootNode) {
  let maxVal = rootNode.val

  if(!rootNode) return console.log("Stop! You have violated the law.")

  let queue = [rootNode];

  while (queue.length) {
    let shiftedNode = queue.shift();
    if(shiftedNode.val > maxVal){
      maxVal = shiftedNode.val
    }
    if (shiftedNode.left) { queue.push(shiftedNode.left) }
    if (shiftedNode.right) { queue.push(shiftedNode.right) }
  }

  return maxVal
}

function getHeight (rootNode) {
  if(!rootNode) return console.log("Stop! You have violated the law.")

  let maxHeight = 0;
  rootNode.height = 0;
  let stack = [rootNode];

  while (stack.length) {

    let poppedNode = stack.pop();
    //Give nodes properties
    if (poppedNode.left) {
      poppedNode.left.height = poppedNode.height + 1
      stack.push(poppedNode.left)
      //Math method to return max.
    }
    if (poppedNode.right) {
      poppedNode.right.height = poppedNode.height + 1
      stack.push(poppedNode.right)
    }
    if(maxHeight < poppedNode.height){
      maxHeight = poppedNode.height
    }
    // console.log(`Decremented height: ${maxHeight}`)
  }

  return maxHeight;
}
// "How do I keep track of my height while "traversing" a tree"
// How do I keep track of the height of a "path"
//

function countNodes (rootNode) {
  let count = 0;

  let bt = new BinarySearchTree()

  bt.root = rootNode

  bt.breadthFirstForEach(() => count++)
  return count
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
