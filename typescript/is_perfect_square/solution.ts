function isPerfectSquare(x: number): boolean {
    let left = 1;
    let right = Math.floor(x / 2);
    if (x == 0 || x == 1) {
        return true;
    }
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid == x) {
            return true;
        } else if (mid * mid < x && (mid + 1) * (mid + 1) > x) {
            return false;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else if (mid * mid > x) {
            right = mid - 1;
        }
    }
}

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(80));
console.log(isPerfectSquare(81));
