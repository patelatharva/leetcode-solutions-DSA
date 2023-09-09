function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let numberOfTuples = 0;
  const sumsFromNums1and2 = new Map<number, number>();

  for (let index1 = 0; index1 < nums1.length; index1++) {
    for (let index2 = 0; index2 < nums2.length; index2++) {
      const sum = nums1[index1] + nums2[index2];
      sumsFromNums1and2.set(sum, (sumsFromNums1and2.get(sum) || 0) + 1);
    }
  }

  for (let index3 = 0; index3 < nums3.length; index3++) {
    for (let index4 = 0; index4 < nums4.length; index4++) {
      const sum = -nums3[index3] - nums4[index4];
      numberOfTuples += sumsFromNums1and2.get(sum) || 0;
    }
  }
  return numberOfTuples;
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
console.log(fourSumCount([0], [0], [0], [0]));
