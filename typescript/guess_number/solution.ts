const guess = (val: number) => {
    const picked = 319;
    if (val > picked) {
        return -1;
    } else if (val == picked) {
        return 0;
    } else {
        return 1;
    }
};
function guessNumber(n: number): number {
    let left = 1;
    let right = n;
    let steps = 0;
    while (left <= right) {
        steps++;
        console.log("step: " + steps);
        const mid = Math.floor((left + right) / 2);
        if (0 == guess(mid)) {
            // mid == pick
            return mid;
        } else if (guess(mid) == -1) {
            // mid > pick
            right = mid - 1;
        } else {
            // mid < pick
            left = mid + 1;
        }
    }
    return -1;
}

console.log(guessNumber(1000));
