class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function inorderTraversal(root) {
    if (root === null) {
        return [];
    }
    
    // Traverse left subtree, visit node, and traverse right subtree
    return [
        ...inorderTraversal(root.left),
        root.value,
        ...inorderTraversal(root.right)
    ];
}

// Example usage
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(inorderTraversal(root)); // Output: [2, 1, 3]


function calculateDepth(root) {
    if (root === null) {
        return 0;
    }
    
    // Recursively find the depth of left and right subtrees
    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);
    
    // Return the greater of the two depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
const roott= new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(calculateDepth(roott)); // Output: 3
