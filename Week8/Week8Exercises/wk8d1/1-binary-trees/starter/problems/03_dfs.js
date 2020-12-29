function dfs(root){
    if (!root) return [];
    const stack = [root];  // needed for iteration, not for recursion
    const array = [];

    // iteration version
    while (stack.length) {
        const stackPop = stack.pop();
        // pre-order dfs traversal
        array.push(stackPop.val);
        if (stackPop.right) stack.push(stackPop.right);
        if (stackPop.left) stack.push(stackPop.left);
    }

    // recursive version
    // array.push(root.val);
    // array.push(...dfs(root.right));
    // array.push(...dfs(root.left));

    return array;
}

module.exports = { dfs };
