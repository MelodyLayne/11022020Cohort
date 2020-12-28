function findMin(root) {
  if (!root) return null;
  else if (root.left) return findMin(root.left);
  else if (!root.left) return root;
}

module.exports = {
  findMin,
};
