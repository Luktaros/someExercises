/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (root === null) {
    return null;
  }

  const val = root.val;
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  return new TreeNode(val, right, left);
}
