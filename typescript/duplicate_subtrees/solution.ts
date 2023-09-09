class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const subtreeFreqMap = new Map<string, Array<TreeNode>>();
  function traverseTreeAndUpdateFreq(root1: TreeNode) {
    let treeString = "" + root1.val;
    for (const child of [root1.left, root1.right]) {
      if (child) {
        treeString += " " + traverseTreeAndUpdateFreq(child);
      } else {
        treeString += " " + "null";
      }
    }
    if (subtreeFreqMap.has(treeString)) {
      subtreeFreqMap.set(treeString, [
        ...subtreeFreqMap.get(treeString),
        root1,
      ]);
    } else {
      subtreeFreqMap.set(treeString, [root1]);
    }
    return treeString;
  }
  if (root) {
    traverseTreeAndUpdateFreq(root);
  }
  const duplicateSubtrees: Array<TreeNode> = [];
  for (const [treeString, roots] of subtreeFreqMap.entries()) {
    if (roots.length > 1) {
      console.log(treeString);
      duplicateSubtrees.push(roots[0]);
    }
  }
  return duplicateSubtrees;
}

const testInput = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, new TreeNode(2, new TreeNode(4)), new TreeNode(4)),
);

console.log(findDuplicateSubtrees(testInput));
