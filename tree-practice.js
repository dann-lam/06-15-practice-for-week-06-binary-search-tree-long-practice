const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  //Go left until next is null.
  if (!rootNode) return console.log("Stop!");
  let currNode = rootNode;
  while (currNode.left) {
    currNode = currNode.left;
  }
  return currNode.val;
}

function findMaxBST(rootNode) {
  if (!rootNode) return console.log("Stop!");
  let currNode = rootNode;

  if (!currNode.right) {
    return currNode.val;
  }
  return findMaxBST(currNode.right);
}

/*  if(!rootNode) return console.log("Stop!")
  let currNode = rootNode

  if(currNode.right){
    return findMaxBST(currNode.right)
  }
  return currNode.val */

function findMinBT(rootNode) {
  let minVal = rootNode.val;

  if (!rootNode) return console.log("Stop! You have violated the law.");

  let queue = [rootNode];

  while (queue.length) {
    let shiftedNode = queue.shift();
    if (shiftedNode.val < minVal) {
      minVal = shiftedNode.val;
    }
    if (shiftedNode.left) {
      queue.push(shiftedNode.left);
    }
    if (shiftedNode.right) {
      queue.push(shiftedNode.right);
    }
  }

  return minVal;
}

//Should I iteratively or recursively traverse??

//Because it's not in order we have go through the entire tree.
//And I want to keep a variable to know what "min" is.
//We could use a traversal callback to ensure that we've walked through the entire tree.
//So each time we visit a node, we do a comparison between that node and our "smallest" variable.
//return the smallest num.

function findMaxBT(rootNode) {
  // let maxVal = rootNode.val

  // if (!rootNode) return console.log("Stop! You have violated the law.")

  // let queue = [rootNode];

  // while (queue.length) {
  //   let shiftedNode = queue.shift();
  //   if (shiftedNode.val > maxVal) {
  //     maxVal = shiftedNode.val
  //   }
  //   if (shiftedNode.left) { queue.push(shiftedNode.left) }
  //   if (shiftedNode.right) { queue.push(shiftedNode.right) }
  // }

  // return maxVal

  let max = -Infinity;
  const updateMax = (node) => {
    if (node.val > max) {
      max = node.val;
    }
  };

  BinarySearchTree.breadthFirstForEach(rootNode, updateMax);
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;

  let maxHeight = 0;
  rootNode.height = 0;
  let stack = [rootNode];

  while (stack.length) {
    let poppedNode = stack.pop();
    //Give nodes properties
    if (poppedNode.left) {
      poppedNode.left.height = poppedNode.height + 1;
      stack.push(poppedNode.left);
      //Math method to return max.
    }
    if (poppedNode.right) {
      poppedNode.right.height = poppedNode.height + 1;
      stack.push(poppedNode.right);
    }
    if (maxHeight < poppedNode.height) {
      maxHeight = poppedNode.height;
    }
    // console.log(`Decremented height: ${maxHeight}`)
  }

  return maxHeight;
}
// "How do I keep track of my height while "traversing" a tree"
// How do I keep track of the height of a "path"
//

function countNodes(rootNode) {
  let count = 0;

  BinarySearchTree.breadthFirstForEach(rootNode, () => count++);
  return count;
}

function balancedTree(rootNode) {
  // Find the max height of left subtree and the max height of right subtree
  // if the two heights are more than 1 apart, return false
  // otherwise, check heights of further subtrees

  //traverse
  let stack = [rootNode];

  while (stack.length) {
    let poppedNode = stack.pop();

    let leftHeight = -1;
    let rightHeight = -1;

    if (poppedNode.left) {
      leftHeight = getHeight(poppedNode.left);
      stack.push(poppedNode.left);
    }
    if (poppedNode.right) {
      rightHeight = getHeight(poppedNode.right);
      stack.push(poppedNode.right);
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
  }
  return true;
}

function getParentNode(rootNode, target) {
  let stack = [rootNode];
  if (rootNode.val === target) {
    return null;
  }
  while (stack.length) {
    let poppedNode = stack.pop();
    // console.log(poppedNode.val)
    if (poppedNode.left) {
      if (poppedNode.left.val === target) {
        return poppedNode;
      }
      stack.push(poppedNode.left);
    }
    if (poppedNode.right) {
      if (poppedNode.right.val === target) {
        return poppedNode;
      }
      stack.push(poppedNode.right);
    }
  }
}

//Traverse the tree.
//We have the target, as we traverse the tree, we compare the "currentNode's children's value to the target."

//Recursive
function inOrderPredecessor(rootNode, target) {
  let currNode = rootNode;
  if (!curren) return;
  let prevNode;

  inOrderPredecessor(currentNode.left);

  //We do a check *somewhere*
  if (currentNode.value === target) {
    // return currentNode
    //How do I get the predecessor??
    //If we hit null or if we have a match
    //We return the predecessor or null
  }
  inOrderPredecessor(currentNode.right);
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
  deleteNodeBST,
};
