function pivotIndex(nums: number[]): number {
    const n = nums.length;
    if (n == 1) {
        return 0;
    }
    const sumFromLeft = new Array(n).fill(0);
    const sumFromRight = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            sumFromLeft[i] = nums[i];
        } else {
            sumFromLeft[i] = sumFromLeft[i-1] + nums[i];
        }
    }

    for (let i = n - 1; i > -1; i--) {
        if (i == n - 1) {
            sumFromRight[i] = nums[n-1];
        } else {
            sumFromRight[i] = sumFromRight[i + 1] + nums[i];
        }
    }

    if (n > 1 && sumFromRight[1] == 0) {
        return 0;
    }


    for (let pi = 1; pi < n-1; pi++) {
        if (sumFromLeft[pi-1] == sumFromRight[pi+1]) {
            return pi;
        }
    }

    if (n > 1 && sumFromLeft[n-2] == 0) {
        return n-1;
    }
    return -1;
}
