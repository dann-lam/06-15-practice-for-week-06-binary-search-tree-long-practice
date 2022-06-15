// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// class LLNode {
//     constructor(val) {
//       this.val = val;
//       this.next = null;
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//     }

//     addToTail(val) {
//       if (!this.head) {
//         this.head = new LLNode(val);
//         this.tail = this.head;
//         return
//       }

//       this.tail.next = new LLNode(val);
//       this.tail = this.tail.next;
//     }

//     removeFromHead() {
//       if (this.head === this.tail) { this.tail = null }
//       let dequeued = this.head;
//       this.head = this.head.next;
//       return dequeued;
//     }
//   }
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    //To insert, we look at the root's val, and compare it to the val we want to insert.
    if (!this.root) return (this.root = new TreeNode(val));

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
    //If our val is less than the currentNode's val, navigate to currentNode's left and set it as the new currentNode.
    //If our val is greater than currentNode's val, navigate to currentNode's right and set it as the new currentNode.
    //Recursively assign/reassign or use iterative?
    //Use while loop.
  }

  search(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left);

    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);

    console.log(currentNode.val);

    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);

    this.postOrderTraversal(currentNode.right);

    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [this.root];

    while (queue.length) {
      let shiftedNode = queue.shift();
      console.log(shiftedNode.val)
      if (shiftedNode.left) { queue.push(shiftedNode.left) }
      if (shiftedNode.right) { queue.push(shiftedNode.right) }
    }


    //-------------------------------
    // let queue = [this.root];

    // while (queue.length) {
    //   let shiftedNode = queue.shift();
    //   console.log(shiftedNode.val)
    //   if (shiftedNode.left) { queue.push(shiftedNode.left) }
    //   if (shiftedNode.right) { queue.push(shiftedNode.right) }
    // }
    //-------------------------------
    // let queue = new LinkedList();
    // queue.addToTail(this.root);

    // while (queue.head) {
    //   let shiftedNode = queue.removeFromHead().val;
    //   console.log(shiftedNode.val)
    //   if (shiftedNode.left) { queue.addToTail(shiftedNode.left) }
    //   if (shiftedNode.right) { queue.addToTail(shiftedNode.right) }
    // }
  }
  breadthFirstForEach(cb) {
    let queue = [this.root];
    //The callback is increasing count++
    while (queue.length) {
      let shiftedNode = queue.shift();
        //  cb()
        cb(shiftedNode)
      if (shiftedNode.left) { queue.push(shiftedNode.left) }
      if (shiftedNode.right) { queue.push(shiftedNode.right) }
    }
}

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [this.root];

    while (stack.length) {
      let poppedNode = stack.pop();
      console.log(poppedNode.val)
      if (poppedNode.left) { stack.push(poppedNode.left) }
      if (poppedNode.right) { stack.push(poppedNode.right) }
    }
}
}
module.exports = { BinarySearchTree, TreeNode };
