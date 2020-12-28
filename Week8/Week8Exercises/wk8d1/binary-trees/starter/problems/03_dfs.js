function dfs(root) {
  if (!root) return [];
  const stack = [root];
  const values = [];
  while (stack.length) {
    const stackShift = stack.pop();
    values.push(stackShift.val);
    if (stackShift.right) stack.push(stackShift.right);
    if (stackShift.left) stack.push(stackShift.left);
  }
  return values;
}

module.exports = { dfs };
