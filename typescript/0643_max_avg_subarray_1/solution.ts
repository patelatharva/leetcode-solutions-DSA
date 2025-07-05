function findMaxAverage(nums: number[], k: number): number {

    const n = nums.length;
    if (n == 1) {
        return nums[0];
    }
    const sums = new Array(n).fill(0);

    if (n > 0) {
        sums[0] = nums[0];
    }
    if (n > 1) {
        for (let i = 1; i < nums.length; i++) {
            sums[i] = sums[i-1] + nums[i];
        }
    }
    console.log("sums: ", sums);
    let maxValue = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < n - k + 1; i++) {
        const avg = (sums[i + k - 1] - (i > 0 ? sums[i - 1] : 0))/k;
        if (avg > maxValue) {
            maxValue = avg;
        }
    }
    return maxValue;
}
