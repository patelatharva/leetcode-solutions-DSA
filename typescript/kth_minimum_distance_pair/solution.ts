function smallestDistancePair(nums: number[], k: number): number {
    nums = nums.sort((a, b) => a - b);
    // the lower and upper bounds of the guessed answer
    let low = 0;
    let high = nums[nums.length - 1] - nums[0];
    while (low < high) {
        const candidate = Math.floor((low + high) / 2);
        let count = 0; // number of pairs in the array having distance less than or equal to candidate answer
        let left = 0;
        for (let right = 1; right < nums.length; right++) {
            while (nums[right] - nums[left] > candidate) {
                left += 1;
            }
            count += right - left;
        }
        if (count < k) {
            low = candidate + 1;
        } else {
            high = candidate;
        }
    }
    return low;
}

console.log(smallestDistancePair([1, 3, 1], 2));
console.log(smallestDistancePair([1, 1, 1], 2));
console.log(smallestDistancePair([1, 6, 1], 3));
console.log(smallestDistancePair([62, 100, 4], 2));
