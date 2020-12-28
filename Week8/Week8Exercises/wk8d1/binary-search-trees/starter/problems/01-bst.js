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
    if (!this.root) return (this.root = new TreeNode(val));

    if (val < root.val) {
      if (root.left) {
        return this.insert(val, root.left);
      } else if (!root.left) {
        return (root.left = new TreeNode(val));
      }
    } else if (val >= root.val) {
      if (root.right) {
        return this.insert(val, root.right);
      } else if (!root.right) {
        return (root.right = new TreeNode(val));
      }
    }
  }
  searchRecur(val, root = this.root) {
    if (!root) return false;

    if (val === root.val) return true;
    else if (this.searchRecur(val, root.left)) return true;
    else if (this.searchRecur(val, root.right)) return true;

    else return false;
  }
  searchIter(val) {
    if (!this.root) return false;
    const stack = [this.root];
    while (stack.length) {
      const root = stack.pop();
      if (root.val === val) return true;
      else {
        if (root.right) stack.push(root.right);
        if (root.left) stack.push(root.left);
      }
    }
    return false;
  }
}

module.exports = {
  TreeNode,
  BST,
};
