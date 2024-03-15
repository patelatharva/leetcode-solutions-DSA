from typing import List
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)

        total_cost_to_reach_at_sc = [None] * (n + 1)
        total_cost_to_reach_at_sc[0] = 0
        total_cost_to_reach_at_sc[1] = 0
        if n >= 2:
            for sc in range(2, n+1):
                option_1 = total_cost_to_reach_at_sc[sc - 1] + cost[sc - 1]
                option_2 = total_cost_to_reach_at_sc[sc - 2] + cost[sc - 2]
                total_cost_to_reach_at_sc[sc] = min (option_1, option_2)

        return total_cost_to_reach_at_sc[n]
