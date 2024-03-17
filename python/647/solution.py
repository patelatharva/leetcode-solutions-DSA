class Solution:
    def countSubstrings(self, s: str) -> int:
        # It is an interval DP problem

        # For every possible substring that can be generated from the input s,
        # we want to check whether the given substring is palindrome.

        # To speed up the check whether the given substring is palindrome,
        # we use dynamic programming.
        # To determine whether given substring is palindrome,
        # we remove the first and last characters from that substring and
        # check if the resulting substring is plaindrome from our memoized results.
        n = len(s)
        is_pal = [[False] * n for _ in range(len(s))]
        num_of_pals = 0
        for substr_len in range(1, n + 1):
            for left in range(n - substr_len + 1):
                right = left + substr_len - 1
                if right <= n - 1:
                    if s[left] == s[right]:
                        if right - left > 2:
                            temp_value = is_pal[left + 1][right - 1]
                            is_pal[left][right] = temp_value
                            if temp_value:
                                num_of_pals += 1
                        else:
                            is_pal[left][right] = True
                            num_of_pals += 1

        return num_of_pals
