from typing import Dict, List, Tuple
import math
class Solution(object):

    def __init__(self):
        self.sumArrayMemo: Dict[Tuple[int, int], int] = {} 
        self.minSumMemo: Dict[Tuple[int, int, int], int] = {}
        self.origArray: List[int] = []

    
    def splitArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        self.origArray = nums
        return self.helperSplitArray(
            leftPos=0,
            rightPos=len(nums) - 1,
            k=k
        )

    def helperSplitArray(self, leftPos: int, rightPos: int, k: int):
        # print(f"leftPos: {leftPos}")
        # print(f"rightPos: {rightPos}")
        # print(f"k: {k}")
        if (leftPos, rightPos, k) in self.minSumMemo:
            return self.minSumMemo[(leftPos, rightPos, k)]
        maxSum = math.inf
        if rightPos - leftPos + 1 < k:
            raise Exception(f"cannot split. leftPos: {leftPos} rightPos: {rightPos} k: {k} rightPos - leftPos + 1: {rightPos - leftPos + 1}")
        if k == 1:
            maxSum = self.sumArray(leftPos=leftPos, rightPos=rightPos)
        elif k == 2:            
            leftBoundOfSearchForBestSplitPos = leftPos
            rightBoundOfSearchForBestSplitPos = rightPos
            minimumMaxSumFound = math.inf
            while (True):
                splitPos = math.ceil((leftBoundOfSearchForBestSplitPos + rightBoundOfSearchForBestSplitPos)/2)
                sumOfLeftArray = self.sumArray(leftPos=leftPos, rightPos=splitPos - 1)
                sumOfRightArray = self.sumArray(leftPos=splitPos, rightPos=rightPos)
                maxSumAtSplitPos = max(sumOfLeftArray, sumOfRightArray)
                # print(f"splitPos: {splitPos}")
                # print(f"maxSumAtSplitPos: {maxSumAtSplitPos}")
                # print("--------------")

                if maxSumAtSplitPos < minimumMaxSumFound:
                    minimumMaxSumFound = maxSumAtSplitPos
                
                maxSumWhenSplitPosShiftedLeft = math.inf
                if splitPos - 1 > 0:
                    elementBeforeSplitPos = self.origArray[splitPos - 1]
                    sumOfLeftArrayWhenSplitPosShiftedLeft = sumOfLeftArray - elementBeforeSplitPos
                    sumOfRightArrayWhenSplitPosShiftedRight = sumOfRightArray + elementBeforeSplitPos
                    maxSumWhenSplitPosShiftedLeft = max(sumOfLeftArrayWhenSplitPosShiftedLeft, 
                                                        sumOfRightArrayWhenSplitPosShiftedRight)                      

                if maxSumWhenSplitPosShiftedLeft < maxSumAtSplitPos:
                    rightBoundOfSearchForBestSplitPos = splitPos - 1
                else:
                    leftBoundOfSearchForBestSplitPos = splitPos
                if rightBoundOfSearchForBestSplitPos - leftBoundOfSearchForBestSplitPos < 1:
                    break
            maxSum = minimumMaxSumFound
        else:
            minimumValueFound = math.inf
            kLeftForMinimumValueFound = 1
            for kLeft in range(1, k):
                kRight = k - kLeft
                leftBoundOfSearchForBestSplitPos = leftPos
                rightBoundOfSearchForBestSplitPos = rightPos
                minimumMaxSumFound = math.inf
                while (True):
                    splitPos = math.ceil((leftBoundOfSearchForBestSplitPos + rightBoundOfSearchForBestSplitPos)/2)
                    maxSumAtSplitPos = math.inf
                    if kLeft <= (splitPos - 1) - leftPos + 1:
                        sumFromLeftArray = self.helperSplitArray(leftPos=leftPos, rightPos=splitPos - 1, k=kLeft)
                    else:
                        sumFromLeftArray = math.inf
                    if kRight <= rightPos - splitPos + 1:
                        sumFromRightArray = self.helperSplitArray(leftPos=splitPos, rightPos=rightPos, k=kRight)
                    else:
                        sumFromRightArray = math.inf
                    maxSumAtSplitPos = max(sumFromLeftArray, sumFromRightArray)
                    if maxSumAtSplitPos < minimumMaxSumFound:
                        minimumMaxSumFound = maxSumAtSplitPos
                    maxSumWhenSplitPosShiftedLeft = math.inf
                    if splitPos - 2 > 0:
                        if kLeft <= (splitPos - 2) - leftPos + 1 and kRight <= rightPos - splitPos + 1:
                            maxSumWhenSplitPosShiftedLeft = max(
                                self.helperSplitArray(leftPos=leftPos, rightPos=splitPos - 2, k=kLeft), 
                                self.helperSplitArray(leftPos=splitPos, rightPos=rightPos, k=kRight)
                                )   
                                  
                    if maxSumWhenSplitPosShiftedLeft < maxSumAtSplitPos:
                        rightBoundOfSearchForBestSplitPos = splitPos - 1
                    else:
                        leftBoundOfSearchForBestSplitPos = splitPos
                    if rightBoundOfSearchForBestSplitPos - leftBoundOfSearchForBestSplitPos < 1:
                        break
                if minimumMaxSumFound < minimumValueFound:
                    minimumValueFound = minimumMaxSumFound
                    kLeftForMinimumValueFound = kLeft
            maxSum = minimumValueFound            
        self.minSumMemo[(leftPos, rightPos, k)] = maxSum
        return maxSum

        
    def sumArray(self, leftPos, rightPos):
        if (leftPos, rightPos) in self.sumArrayMemo:
            pass
        else:
            if (leftPos + 1, rightPos) in self.sumArrayMemo:
                self.sumArrayMemo[(leftPos, rightPos)] = self.origArray[leftPos] + self.sumArrayMemo[(leftPos + 1, rightPos)]
            elif (leftPos, rightPos - 1) in self.sumArrayMemo:
                self.sumArrayMemo[(leftPos, rightPos)] = self.origArray[rightPos] + self.sumArrayMemo[(leftPos, rightPos - 1)]
            else:
                self.sumArrayMemo[(leftPos, rightPos)] = sum(self.origArray[leftPos:(rightPos+1)])
        return self.sumArrayMemo[(leftPos, rightPos)]
    

if __name__ == '__main__':
    solution = Solution()
    nums = [1,2,3,4,5] 
    k = 3
    print(solution.splitArray(nums, k))
