class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val, root = this.root) {
    if (!this.root) return this.root = new TreeNode(val)

    if (val < root.val) {
          if (!root.left) {
            root.left = new TreeNode(val);
          } else {
            this.insert(val, root.left);
          }
    } else {
           if (!root.right) {
             root.right = new TreeNode(val);
           } else {
             this.insert(val, root.right);
           }
      }
    }
}


module.exports = {
    TreeNode,
    BST
};
