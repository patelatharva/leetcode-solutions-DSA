from typing import List, Dict


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in range(0, 9):
            num_freq: Dict[str, int] = {}
            for col in range(0, 9):
                if board[row][col] != '.':
                    # increment the frequency of the number in num_freq
                    num_freq[board[row][col]] = num_freq.get(board[row][col], 0) + 1
                    # if the frequency of the number is greater than 1, then the board is not valid
                    if num_freq[board[row][col]] > 1:
                        return False

        for col in range(0, 9):
            num_freq: Dict[str, int] = {}
            for row in range(0, 9):
                if board[row][col] != '.':
                    # increment the frequency of the number in num_freq
                    num_freq[board[row][col]] = num_freq.get(board[row][col], 0) + 1
                    # if the frequency of the number is greater than 1, then the board is not valid
                    if num_freq[board[row][col]] > 1:
                        return False

        for row in range(0, 9, 3):
            for col in range(0, 9, 3):
                num_freq: Dict[str, int] = {}
                for i in range(0, 3):
                    for j in range(0, 3):
                        if board[row + i][col + j] != '.':
                            # increment the frequency of the number in num_freq
                            num_freq[board[row + i][col + j]] = num_freq.get(board[row + i][col + j], 0) + 1
                            # if the frequency of the number is greater than 1, then the board is not valid
                            if num_freq[board[row + i][col + j]] > 1:
                                return False

        return True


if __name__ == '__main__':
    solution = Solution()
    board_1 = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
               ["6", ".", ".", "1", "9", "5", ".", ".", "."],
               [".", "9", "8", ".", ".", ".", ".", "6", "."],
               ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
               ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
               ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
               [".", "6", ".", ".", ".", ".", "2", "8", "."],
               [".", ".", ".", "4", "1", "9", ".", ".", "5"],
               [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
    print(solution.isValidSudoku(board_1))

    board_2 = [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

    print(solution.isValidSudoku(board_2))
