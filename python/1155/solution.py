class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        dp = [
            [0] * (target + 1) for _ in range(0, n+1)]
        dp[0][0] = 1

        # base case
        # it is possible to achieve target sum 0 in one way by
        # not rolling any dice.

        # Let's figure out optimal substructure.

        # let's assume we rolled a first dice
        # it has possible outcomes from 1 to k.
        # Now each of the possible outcomes contribute to achieve certain target values of sums.

        # Now there is 1 way to achieve target sum of 1 to k.
        # In formulate this by saying that:
        # for target_sum in range(1, target + 1):
        #    for possible_outcome in range(1, k+1):
        #       if target_sum >= possible_outcome:
        #           num_ways_for_sum[target_sum] = num_ways_for_sum[target_sum - possible_outcome]
        # We reflect that by updating values at specific indices in our DP array the num_ways_for_sum.

        # Let's roll the second dice.
        # It will have possible outcomes from 1 to k.

        for dice_rolled in range(1, n+1):
            for target_sum in range(1, target + 1):
                # print(f"target_sum: {target_sum}")
                for possible_outcome in range(1, k + 1):
                    # print(f"possible_outcome: {possible_outcome}")
                    if target_sum >= possible_outcome:
                        # print(
                        #     f"target_sum - possible_outcome: {target_sum - possible_outcome}")
                        # print(
                        #     f"num_ways_for_sum[dice_rolled - 1: {dice_rolled - 1}][target_sum - possible_outcome = {target_sum - possible_outcome}]: {dp[dice_rolled-1][target_sum - possible_outcome]}")
                        # print(
                        #     f"num_ways_for_sum[dice_rolled: {dice_rolled}][target_sum = {target_sum}] before update: {dp[dice_rolled][target_sum]}")
                        dp[dice_rolled][target_sum] = (dp[dice_rolled][target_sum] + dp[dice_rolled - 1][
                            target_sum - possible_outcome
                        ]) % (10**9 + 7)

                        # print(
                        #     f"num_ways_for_sum[dice_rolled: {dice_rolled}][target_sum = {target_sum}] after update: {dp[dice_rolled][target_sum]}")

        return dp[n][target]


if __name__ == "__main__":
    solution = Solution()
    print(
        f"solution.numRollsToTarget(1, 6, 3): {solution.numRollsToTarget(1, 6, 3)}")
    print(
        f"solution.numRollsToTarget(2, 6, 7): {solution.numRollsToTarget(2, 6, 7)}")
