/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let leftPtr = 0;
    let rightPtr = nums.length - 1;

    while (leftPtr < rightPtr) {
        if (nums[leftPtr] == 0) {
            while (nums[rightPtr] == 0 && rightPtr > leftPtr) {
                rightPtr--;
            }
            let temp = nums[rightPtr];
            nums[rightPtr] = nums[leftPtr];
            nums[leftPtr] = temp;
            // console.log("nums after moving zero to the right: ", nums);
            // console.log("right pointer: ", rightPtr);
            // console.log("left pointer: ", leftPtr);
            // move the newly positioned number all the way to the right just before the rightPtr
            for (let i = leftPtr; i < rightPtr - 1; i++) {
                if (i + 1 < nums.length) {
                    // swap i and i + 1 th elements.
                    let temp = nums[i + 1];
                    nums[i + 1] = nums[i];
                    nums[i] = temp;
                    // console.log("nums after swapping at i: " + i + "th pos with i + 1 ", nums);
                }
            }
            // console.log("nums after fixing position of new element: ", nums);
        }
        if (nums[leftPtr] != 0) {
            leftPtr += 1;
        }
    }
}
