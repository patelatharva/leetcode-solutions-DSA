/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
const solution = function (isBadVersion: any) {
    return function (n: number): number {
        let leftValue = 1;
        let rightValue = n;

        while (leftValue < rightValue) {
            const midValue = Math.floor((leftValue + rightValue) / 2);
            if (isBadVersion(midValue)) {
                rightValue = midValue;
            } else {
                leftValue = midValue + 1;
            }
        }

        if (leftValue == rightValue) {
            return leftValue;
        }
    };
};

console.log(
    solution((version: number) => {
        return version >= 7;
    })(10),
);
