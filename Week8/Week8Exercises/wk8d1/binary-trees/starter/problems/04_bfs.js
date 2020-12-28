function bfs(root) {
    if(!root) return []
    const queue = [root];
    const values= [];

    while (queue.length) {
        const current = queue.shift();
        values.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return values;
}

module.exports = { bfs };
