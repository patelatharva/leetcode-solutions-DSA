from typing import List


class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        # stores the max sum after partitioning for different values of str_len
        lsap = [0] + [None for _ in range(n)]

        for str_len in range(1, n+1):
            # print(f"str_len: {str_len}")
            max_value_across_all_possible_prefixes_lte_max_pre_len = float(
                '-inf')
            max_pre_len = str_len - 1
            max_elem_in_suffix = float('-inf')
            for pre_len in range(max_pre_len, max(str_len - k, 0) - 1, -1):
                # print(f"pre_len: {pre_len}")
                suf_len = str_len - pre_len
                # print(f"suf_len: {suf_len}")
                index_in_arr = pre_len
                max_elem_in_suffix = max(max_elem_in_suffix, arr[index_in_arr])
                sum_for_suffix = max_elem_in_suffix * suf_len
                # print(f"sum_for_suffix: {sum_for_suffix}")
                sum_for_pre_len = lsap[pre_len] + sum_for_suffix
                # print(f"sum_for_pre_len: {sum_for_pre_len}")
                if sum_for_pre_len > max_value_across_all_possible_prefixes_lte_max_pre_len:
                    max_value_across_all_possible_prefixes_lte_max_pre_len = sum_for_pre_len
                # print(f"max_value_across_all_possible_prefixes_lte_max_pre_len: {max_value_across_all_possible_prefixes_lte_max_pre_len}")
            lsap[str_len] = max_value_across_all_possible_prefixes_lte_max_pre_len
            # print(f"lsap[str_len]: {lsap[str_len]}")
        return lsap[n]
