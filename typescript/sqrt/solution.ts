function mySqrt(x: number): number {
    let left = 1;
    let right = Math.floor(x / 2);
    if (x <= 0) {
        return 0;
    }
    if (x == 1) {
        return 1;
    }
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else if (mid * mid > x) {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(4));
console.log(mySqrt(9));
console.log(mySqrt(80));
