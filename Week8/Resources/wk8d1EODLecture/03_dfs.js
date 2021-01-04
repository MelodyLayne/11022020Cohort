// stack to help with DFS
// array for our stack
// Understanding
  // go all the way down the tree to the leaf nodes
  // before looking elsewhere
// Plan
  // PreOrder
  // base case: if root is null return an empty array
  // initialize a stack with the root element
  // initialize a return value (array)
  // while stack has contents, loop
    // remove top element from the stack and store it as variable
    // push element's value into returnArray
    // if element has a right, push that right into stack
    // if element has a left, push that left into stack
  // return returnArray


function dfs(root){
  if (!root) return []; // base case: if root is null return an empty array

  const stack = [root] // initialize a stack with the root element
  const arr = []; // initialize a return value (array)

  while(stack.length) { // while stack has contents, loop
    let el = stack.pop(); // remove top element from the stack and store it as variable
    arr.push(el.val); // push element's value into returnArray

    if (el.right) stack.push(el.right); // if element has a right, push that right into stack
    if (el.left) stack.push(el.left); // if element has a left, push that left into stack
  }

  return arr; // return returnArray
}

module.exports = { dfs };