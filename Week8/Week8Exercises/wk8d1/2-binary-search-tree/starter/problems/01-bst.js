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
    if (!root) return this.root = new TreeNode(val);

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

  searchRecur(val, root=this.root) {
    if (!root) return false;
    if (val === root.val) return true;

    if (this.searchRecur(val, root.left)) return true;
    if (this.searchRecur(val, root.right)) return true;

    return false;

    // alternate/more explicit version

    // if (val < root.val) {
    //   return this.searchRecur(val, root.left);
    // } else if (val > root.val) {
    //   return this.searchRecur(val, root.right);
    // } else {
    //   return true;
    // }
  }

  searchIter(val) {
    if (!this.root) return false;

    const array = [this.root];
    while (array.length) {
      const root = array.pop();

      if (root.val === val) {
        return true;
      } else {
        if (root.right) array.push(root.right);
        if (root.left) array.push(root.left);
      }
    }
    return false;
  }

}

module.exports = {
    TreeNode,
    BST
};
