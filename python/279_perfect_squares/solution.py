class Solution:
    def numSquares(self, n: int) -> int:
        f = [i for i in range(0, n+1)]
        for num in range(1, n+1):
            sq_root = 1          
            square = sq_root ** 2  
            while square <= num:
                f[num] = min(f[num], 1 + f[num - square])
                sq_root += 1
                square = sq_root ** 2

        return f[n]
    


if __name__ == '__main__':
    solution = Solution()
    n = 13
    print(n, solution.numSquares(n=n))

    n = 12
    print(n, solution.numSquares(n=n))