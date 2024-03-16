class Solution:
    def maximumSumRectangle(self, R, C, M):
        max_sum = float('-inf')
        cum_sum = [[0] * C for _ in range(R)]
        cum_sum[0][0] = M[0][0]
        # initialize cumulative sum for all columns in first row
        for col in range(1, C):
            cum_sum[0][col] = cum_sum[0][col - 1] + M[0][col]

        # initialize cumulative sum for all rows in first column
        for row in range(1, R):
            cum_sum[row][0] = cum_sum[row-1][0] + M[row][0]

        # fill the cumulative sum for remaining cells
        for row in range(1, R):
            for col in range(1, C):
                cum_sum[row][col] = M[row][col] + cum_sum[row][col-1] + \
                    cum_sum[row-1][col] - cum_sum[row-1][col-1]

        for row_start in range(R):
            for col_start in range(C):
                for height in range(R - row_start):
                    for width in range(C - col_start):
                        row_end = row_start + height
                        col_end = col_start + width

                        sum_submatrix = cum_sum[row_end][col_end]
                        if row_start > 0:
                            sum_submatrix -= cum_sum[row_start - 1][col_end]
                        if col_start > 0:
                            sum_submatrix -= cum_sum[row_end][col_start-1]
                        if row_start > 0 and col_start > 0:
                            sum_submatrix += cum_sum[row_start -
                                                     1][col_start - 1]

                        if sum_submatrix > max_sum:
                            max_sum = sum_submatrix
        return max_sum
