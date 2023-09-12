function search(nums: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (true) {
    const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (nums.length == 0) {
      return -1;
    }
    if (leftIndex > rightIndex) {
      return -1;
    }
    const middleElement = nums[middleIndex];

    if (target == middleElement) {
      return middleIndex;
    } else if (target < middleElement) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
}

console.log(search([-1, 0, 3, 5, 9, 12], 13));
