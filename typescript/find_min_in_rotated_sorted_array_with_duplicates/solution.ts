function findMin(nums: number[]): number {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let leftValue: number = nums[leftIndex];
    let rightValue: number = nums[rightIndex];
    if (nums.length == 1) {
        return nums[0];
    }
    while (leftIndex < rightIndex && leftValue >= rightValue) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];

        if (midValue > rightValue) {
            leftIndex = midIndex + 1;
        } else if (leftValue > midValue) {
            rightIndex = midIndex;
        } else {
            return Math.min(
                findMin(nums.slice(leftIndex, midIndex + 1)),
                findMin(nums.slice(midIndex + 1, rightIndex + 1)),
            );
        }
        leftValue = nums[leftIndex];
        rightValue = nums[rightIndex];
    }

    return nums[leftIndex];
}

console.log(findMin([3, 1, 3]));
console.log(findMin([3, 3, 3, 3, 4, 1, 3]));
