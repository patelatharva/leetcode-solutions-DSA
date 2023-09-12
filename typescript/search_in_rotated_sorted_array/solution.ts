function findShift(nums: number[]) {
    let shift = 0;
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    let leftValue = nums[leftIndex];
    let rightValue = nums[rightIndex];
    while (leftValue > rightValue) {
        // the position of shift is located within left and right index
        if (rightIndex - leftIndex == 1) {
            shift = rightIndex;
            break;
        }
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];
        if (leftValue > midValue) {
            rightIndex = midIndex;
        } else {
            leftIndex = midIndex;
        }
        leftValue = nums[leftIndex];
        rightValue = nums[rightIndex];
    }

    return shift;
}

function sortArrayFromShift(nums: number[], shift: number): number[] {
    if (shift > 0) {
        return [...nums.slice(shift), ...nums.slice(0, shift)];
    } else {
        return nums;
    }
}

function findTargetInSortedArray(nums: number[], target: number): number {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];
        if (midValue == target) {
            return midIndex;
        } else if (target < midValue) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }
    return -1;
}
function search(nums: number[], target: number): number {
    // first we find out the amount of rotational shift present in the given array
    const shift = findShift(nums);
    // preparing a sorted array based on the amount of rotational shift
    const sortedArray = sortArrayFromShift(nums, shift);
    // finding the index of target value in the sorted array
    const indexInSorted = findTargetInSortedArray(sortedArray, target);
    // adjusting the target value based on amount of rotational shift and returning it
    if (indexInSorted == -1) {
        return -1;
    } else {
        return (indexInSorted + shift) % nums.length;
    }
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
