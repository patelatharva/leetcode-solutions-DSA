function nextGreatestLetter(letters: string[], target: string): string {
    let leftIndex = 0;
    let rightIndex = letters.length - 1;

    while (leftIndex < rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midValue = letters[midIndex];
        const nextToMidValue = letters[midIndex + 1];
        if (midValue <= target && target < nextToMidValue) {
            return nextToMidValue;
        } else if (target < midValue) {
            rightIndex = midIndex;
        } else if (nextToMidValue <= target) {
            leftIndex = midIndex + 1;
        }
    }

    if (letters[leftIndex] > target) {
        return letters[leftIndex];
    } else {
        return letters[0];
    }
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
