function preOrderArray(root) {
  if (!root) return [];
  const array = [];

  array.push(root.val);
  array.push(...preOrderArray(root.left));
  array.push(...preOrderArray(root.right));

  return array;
}

function inOrderArray(root) {
  if (!root) return [];
  const array = [];

  array.push(...inOrderArray(root.left));
  array.push(root.val);
  array.push(...inOrderArray(root.right));

  return array;
}

function postOrderArray(root) {
  if (!root) return [];
  const array = [];

  array.push(...postOrderArray(root.left));
  array.push(...postOrderArray(root.right));
  array.push(root.val);

  return array;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
