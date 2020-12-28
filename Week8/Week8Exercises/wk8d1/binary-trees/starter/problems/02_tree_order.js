function preOrderArray(root) {
  if (!root) return [];
  let out = [];
  out.push(root.val)
  out.push(...preOrderArray(root.left));
  out.push(...preOrderArray(root.right));
  return out;
}

function inOrderArray(root) {
  if (!root) return [];
  let out = [];
  out.push(...inOrderArray(root.left));
  out.push(root.val)
  out.push(...inOrderArray(root.right));
  return out;
}

function postOrderArray(root) {
  if (!root) return [];
  let out = [];
  out.push(...postOrderArray(root.left));
  out.push(...postOrderArray(root.right));
  out.push(root.val)
  return out;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
