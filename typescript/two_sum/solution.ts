function twoSum(numbers: number[], target: number): number[] {
    function searchForCounterPart(
        startIndex: number,
        counterPart: number,
    ): number {
        let leftIndex = startIndex;
        let rightIndex = numbers.length - 1;
        while (leftIndex <= rightIndex) {
            const midIndex = Math.floor((leftIndex + rightIndex) / 2);
            const midValue = numbers[midIndex];
            if (midValue == counterPart) {
                return midIndex;
            } else if (counterPart < midValue) {
                rightIndex = midIndex - 1;
            } else if (counterPart > midValue) {
                leftIndex = midIndex + 1;
            }
        }
        return -1;
    }

    for (
        let firstElementIndex = 0;
        firstElementIndex < numbers.length - 1 &&
        numbers[firstElementIndex] <= Math.abs(target);
        firstElementIndex++
    ) {
        const secondElementIndex = searchForCounterPart(
            firstElementIndex + 1,
            target - numbers[firstElementIndex],
        );
        if (secondElementIndex != -1) {
            return [firstElementIndex + 1, secondElementIndex + 1];
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-3, -2, -1, 1, 2, 3, 4, 5, 7, 8, 10], 10));
console.log(twoSum([-1, -1, 1, 1, 1, 1, 1, 1, 2], -2));
