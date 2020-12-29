function findMin(root) {
  if (!root) return null;

  if (root.left) {
    return findMin(root.left)
  } else {
    return root;
  }
}


module.exports = {
  findMin
};
