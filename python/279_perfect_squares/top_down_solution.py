class Solution:

    def numSquares(self, n: int) -> int:
        memo = {}

        for i in range(0, n+1):
            memo[i] = i

        is_final_answer = {}

        def f(num):
            if num in memo and is_final_answer.get(num, False):
                return memo[num]
            else:
                if num == 0:
                    return 0
                sq_root = 1          
                square = sq_root ** 2  
                while square <= num:
                    memo[num] = min(memo[num], 1 + f(num - square))
                    sq_root += 1
                    square = sq_root ** 2
                is_final_answer[num] = True
                return memo[num]
        return f(n)




if __name__ == '__main__':
    solution = Solution()
    n = 13
    print(n, solution.numSquares(n=n))

    n = 12
    print(n, solution.numSquares(n=n))