function findMin(nums: number[]): number {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let leftValue: number;
    let rightValue: number;
    do {
        leftValue = nums[leftIndex];
        rightValue = nums[rightIndex];
        if (leftValue <= rightValue) {
            break;
        }
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];

        if (midValue > rightValue) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex;
        }
    } while (leftValue > rightValue);
    return nums[leftIndex];
}

console.log(findMin([3, 4, 5, 1, 2]));
