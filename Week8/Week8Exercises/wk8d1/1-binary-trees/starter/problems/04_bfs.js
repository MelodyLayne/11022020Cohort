function bfs(root){
    if (!root) return [];
    // const queue = [root];
    const array = [];

    while (queue.length) {
        const queuePop = queue.shift();
        // pre-order dfs traversal
        array.push(queuePop.val);
        if (queuePop.left) queue.push(queuePop.left);
        if (queuePop.right) queue.push(queuePop.right);
    }
    return array;
}



module.exports = { bfs };
