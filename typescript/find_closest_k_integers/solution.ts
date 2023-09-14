function findClosestApproaxCenter(nums: number[], target: number) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = nums[midIndex];

        if (midIndex == target) {
            return midIndex;
        } else if (midValue < target) {
            leftIndex = Math.min(midIndex + 1, nums.length - 1);
        } else {
            rightIndex = Math.max(midIndex - 1, 0);
        }
    }
    if (
        Math.abs(nums[leftIndex] - target) < Math.abs(nums[rightIndex] - target)
    ) {
        return leftIndex;
    } else {
        return rightIndex;
    }
}

function getTotalDistance(nums: number[], x: number) {
    let total = 0;
    for (const num of nums) {
        total += Math.abs(num - x);
    }
    return total;
}

function findClosestElements(arr: number[], k: number, x: number): number[] {
    const centerIndex = findClosestApproaxCenter(arr, x);
    let startRangeIndex = Math.max(0, centerIndex - Math.floor(k / 2));
    let endRangeIndex = startRangeIndex + k - 1;
    if (endRangeIndex > arr.length - 1) {
        const diff = endRangeIndex - (arr.length - 1);
        startRangeIndex -= diff;
        endRangeIndex -= diff;
    }

    let directionToShift = 0;
    let prevDirectionOfShift = 0;
    do {
        prevDirectionOfShift = directionToShift;
        if (directionToShift == -1 && startRangeIndex == 0) {
            break;
        }
        if (directionToShift == 1 && endRangeIndex == arr.length - 1) {
            break;
        }
        startRangeIndex += directionToShift;
        endRangeIndex += directionToShift;
        const totalDistanceAtShift0 = getTotalDistance(
            arr.slice(startRangeIndex, endRangeIndex + 1),
            x,
        );
        let totalDistanceAtShiftMinus1 = totalDistanceAtShift0;
        if (startRangeIndex - 1 >= 0) {
            totalDistanceAtShiftMinus1 = getTotalDistance(
                arr.slice(startRangeIndex - 1, endRangeIndex),
                x,
            );
        }
        let totalDistanceAtShiftPlus1 = totalDistanceAtShift0;
        if (endRangeIndex + 1 <= arr.length - 1) {
            totalDistanceAtShiftPlus1 = getTotalDistance(
                arr.slice(startRangeIndex + 1, endRangeIndex + 2),
                x,
            );
        }

        if (
            totalDistanceAtShiftMinus1 < totalDistanceAtShift0 &&
            totalDistanceAtShiftMinus1 < totalDistanceAtShiftPlus1
        ) {
            directionToShift = -1;
        } else if (
            totalDistanceAtShiftPlus1 < totalDistanceAtShift0 &&
            totalDistanceAtShiftPlus1 < totalDistanceAtShiftMinus1
        ) {
            directionToShift = 1;
        } else if (
            totalDistanceAtShift0 == totalDistanceAtShiftMinus1 &&
            totalDistanceAtShiftPlus1 == totalDistanceAtShiftMinus1
        ) {
            directionToShift = -1;
        } else {
            directionToShift = 0;
        }
        if (directionToShift == -prevDirectionOfShift) {
            break;
        }
    } while (directionToShift != 0);

    return arr.slice(startRangeIndex, endRangeIndex + 1);
}
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));

console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
console.log(
    findClosestElements([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3], 4, 1),
);
console.log(
    findClosestElements([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3], 4, 2),
);
console.log(
    findClosestElements([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3], 4, 3),
);
console.log(
    findClosestElements([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3], 4, 4),
);
console.log(
    findClosestElements([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3], 4, 0),
);

console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9));

console.log(findClosestElements([1, 2, 5, 5, 6, 6, 7, 7, 8, 9], 7, 7));
