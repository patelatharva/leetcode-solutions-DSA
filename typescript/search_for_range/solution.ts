function findTargetValueIndex(nums: number[], target: number) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    if (nums.length == 0) {
        return -1;
    }
    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];

        if (midValue == target) {
            return midIndex;
        } else if (midValue < target) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
    }
    return -1;
}

function findStartingIndexOfRange(
    nums: number[],
    targetValueIndex: number,
    target: number,
) {
    let leftIndex = 0;
    let rightIndex = targetValueIndex;

    while (true) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];

        if (midValue < target) {
            leftIndex = midIndex + 1;
        } else if (midValue == target) {
            if (midIndex > 0) {
                if (nums[midIndex - 1] < midValue) {
                    return midIndex;
                } else {
                    rightIndex = midIndex - 1;
                }
            } else {
                return midIndex;
            }
        }
    }
}

function findEndingIndexOfRange(
    nums: number[],
    targetValueIndex: number,
    target: number,
) {
    let leftIndex = targetValueIndex;
    let rightIndex = nums.length - 1;
    while (true) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];

        if (target < midValue) {
            rightIndex = midIndex - 1;
        } else if (target == midValue) {
            if (midIndex == nums.length - 1) {
                return midIndex;
            } else if (nums[midIndex + 1] > midValue) {
                return midIndex;
            } else {
                leftIndex = midIndex + 1;
            }
        }
    }
}

function searchRange(nums: number[], target: number): number[] {
    const targetValueIndex = findTargetValueIndex(nums, target);

    if (targetValueIndex == -1) {
        return [-1, -1];
    } else {
        const startingIndexOfRange = findStartingIndexOfRange(
            nums,
            targetValueIndex,
            target,
        );
        const endingIndexOfRange = findEndingIndexOfRange(
            nums,
            targetValueIndex,
            target,
        );
        return [startingIndexOfRange, endingIndexOfRange];
    }
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

console.log(searchRange([], 6));
