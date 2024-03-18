from typing import List, Dict


class Solution:

    def longestStrChain(self, words: List[str]) -> int:
        # Solving with DP approach

        dp = {}

        # We should be able to iterate through the string in order of their lengths in increasing order

        # We use BST to perform sort based on their lengths

        class TreeNode:
            def __init__(self, val):
                self.val = val
                self.left = None
                self.right = None

        def insert(root, val):
            if root is None:
                return TreeNode(val)
            if len(val) <= len(root.val):
                root.left = insert(root.left, val)
            else:
                root.right = insert(root.right, val)
            return root

        def inorder_traversal(root, dp: Dict[str, int]):
            if root:
                inorder_traversal(root.left, dp)

                word = root.val
                # print(f"word: {word}")

                max_len_across_all_smaller_words = float("-inf")

                for pos_char_to_be_removed in range(len(word)):
                    smaller_word = word[0:pos_char_to_be_removed] + (
                        word[pos_char_to_be_removed+1:] if pos_char_to_be_removed + 1 < len(word) else "")
                    # print(f"smaller_word: {smaller_word}")
                    # print(
                    #     f"dp.get(smaller_word, 0): {dp.get(smaller_word, 0)}")
                    max_len_with_smaller_word_as_predecessor = dp.get(
                        smaller_word, 0) + 1

                    if max_len_with_smaller_word_as_predecessor > max_len_across_all_smaller_words:
                        max_len_across_all_smaller_words = max_len_with_smaller_word_as_predecessor

                dp[word] = max_len_across_all_smaller_words
                # print(f"dp[word={word}]: {dp[word]}")

                inorder_traversal(root.right, dp)

        def helper(strings):
            root = None
            for string in strings:
                root = insert(root, string)
            dp: Dict[str, int] = {
                "": 0
            }
            inorder_traversal(root, dp)
            return max(dp.values())

        return helper(words)


if __name__ == "__main__":
    solution = Solution()
    # words = ["a", "b", "ba", "bca", "bda", "bdca"]
    # words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
    # words = ["abcd","dbqca"]
    words = ["a", "b", "ab", "bac"]
    print(solution.longestStrChain(words))
