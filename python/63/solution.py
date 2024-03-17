class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        # It is a Grid DP problem
        # I am memoizing the solutions to the
        # number of ways for reaching a given point in grid
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])
        dp = [[0] * (n+1) for _ in range(m+1)]
        dp[1][1] = 1 - obstacleGrid[0][0]

        # We have padded 0 as the first column and first row in our DP.
        # It indicates that there are 0 ways to reach to the
        # imaginary grid cells located on the left and on top side of our grid.

        for row in range(1, m+1):
            for col in range(1, n + 1):
                if obstacleGrid[row-1][col-1] == 0:
                    dp[row][col] += dp[row-1][col] + dp[row][col-1]

        return dp[m][n]
