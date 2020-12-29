function getHeight(root, height = 0) {
  if (!root) return -1;
  let leftDepth = 1;
  let rightDepth = 1;
  if (!root.left && !root.right) return height;
  leftDepth = getHeight(root.left, height + 1);
  rightDepth = getHeight(root.right, height + 1);
  return leftDepth > rightDepth ? leftDepth : rightDepth;
}


module.exports = {
  getHeight
};
