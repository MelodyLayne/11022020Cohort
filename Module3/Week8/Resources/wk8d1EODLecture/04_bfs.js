// Queue - []
// Understanding
  // Visiting ever item in a level before we move to the next row
    // moving left to right on each level.
// Plan
  // edge case: return an empty array if the tree is empty
  // set up queue with root inside
  // set up return values
  // iterate while queue has length
    // remove element from the front of the queue
    // push elements val into array
    // add element's children into queue if they exist
    // left then right order
  // return our list of values


function bfs(root){
  if (!root) return []; // return an empty array if the tree is empty

  const queue = [root]; // set up queue with root inside
  const vals = []; // set up return values

  while(queue.length) { // iterate while queue has length
    let element = queue.shift()// remove element from the front of the queue
    vals.push(element.val) // push elements val into array

    // add element's children into queue if they exist
      // left then right order
    if(element.left) queue.push(element.left);
    if(element.right) queue.push(element.right);
  }

  return vals; // return our list of values
}

module.exports = { bfs };