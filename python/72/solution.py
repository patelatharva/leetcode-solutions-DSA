class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        # DP problem
        # The meomization for the calculations of edit distance for prefixes from both strings
        
        dp = [[0] * (len(word2) + 1) for _ in range(len(word1) + 1)]

        cost_of_insertion = 1
        cost_of_deletion = 1
        cost_of_replacement = 1
        
        for pre_1_len in range(0, len(word1) + 1):
            for pre_2_len in range(0, len(word2) + 1):              
                if pre_2_len == 0:
                    # remove all characters from prefix 1 to convert it into an empty string that is prefix 2
                    dp[pre_1_len][pre_2_len] = pre_1_len * cost_of_deletion
                elif pre_1_len == 0:
                    # insert all characters into the empty prefix 1 from prefix 2
                    dp[pre_1_len][pre_2_len] = pre_2_len * cost_of_insertion
                elif word1[pre_1_len - 1] == word2[pre_2_len -1]:
                    dp[pre_1_len][pre_2_len] = dp[pre_1_len-1][pre_2_len-1]
                else:
                    dp[pre_1_len][pre_2_len] = min(
                        # insert the last character at word2[pre_2_len-1] from word2 in the word1
                        # with cost of insertion operation
                        # assuming that we have found out a way to convert
                        # word1[:pre_1_len] to word2[:pre_2_len-1] with minimum edit distance of
                        # dp[pre_1_len][pre_2_len-1].
                        cost_of_insertion + dp[pre_1_len][pre_2_len-1],
                        
                        # remove the character at word1[pre_2_len-1]
                        # with cost of deletion
                        # assuming that we have found out a way to convert
                        # word1[:pre_1_len-1] to word2[:pre_2_len] with minimum edit distance of
                        # dp[pre_1_len-1][pre_2_len]

                        cost_of_deletion + dp[pre_1_len-1][pre_2_len],

                        # replace the character at word1[pre_1_len-1] with
                        # character at word2[pre_2_len-1] with cost of replacement
                        # assuming that we have found a way to convert 
                        # word1[:pre_1_len-1] into
                        # word2[:pre_2_len-1] with minimum edit distance of 
                        # dp[pre_1_len-1][pre_1_len-1]

                        cost_of_replacement +  dp[pre_1_len-1][pre_2_len-1]


                    )
                    
        return dp[len(word1)][len(word2)]
