function findPeakElement(nums: number[]): number {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];
        const nextValueToMidValue = nums[midIndex + 1];
        if (midValue < nextValueToMidValue) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex;
        }
    }
    return leftIndex;
}

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
