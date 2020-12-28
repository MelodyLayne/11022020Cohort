function getHeight(root, height = 0) {
  if (!root) return -1;
  let left = 1;
  let right = 1;
  if (!root.left && !root.right) return height;
  left = getHeight(root.left, height + 1);
  right = getHeight(root.right, height + 1);
  return left > right ? left : right;
  // return left > right ? left : right;
}

module.exports = {
  getHeight,
};
clear
