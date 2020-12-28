// current node, left sub tree, right sub tree
function preOrderArray(root) {

}

// left sub tree, current node, right sub tree
function inOrderArray(root) {

}

// left sub tree, right sub tree, current node
function postOrderArray(root, arr=[]) {
  // if the tree node is null, return an empty array
  if (!root) return [];

  // get the array for visiting the left node of node
  let leftSubTree = postOrderArray(root.left, arr);
  // get the array for visiting the right node of node
  let rightSubTree = postOrderArray(root.right, arr);

  // return the left array concatenated with the right array
  //   concatenated with the node value
  
  // return [...leftSubTree, ...rightSubTree, root.val];
  arr.push(root.val);

  return arr;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
