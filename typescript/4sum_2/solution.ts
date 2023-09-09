function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let numberOfTuples = 0;
  const memoizedSums: Map<string, number> = new Map<string, number>();

  for (let index1 = 0; index1 < nums1.length; index1++) {
    for (let index2 = 0; index2 < nums2.length; index2++) {
      for (let index3 = 0; index3 < nums3.length; index3++) {
        for (let index4 = 0; index4 < nums4.length; index4++) {
          if (
            nums1[index1] == 0 &&
            nums2[index2] == 0 &&
            nums3[index3] == 0 &&
            nums4[index4] == 0
          ) {
            numberOfTuples += 1;
          } else {
            const sortedNumbers = [
              nums1[index1],
              nums2[index2],
              nums3[index3],
              nums4[index4],
            ].sort();
            const key = sortedNumbers.join(" ");

            let sumOfElements: number;
            const memoizedSum: number | undefined = memoizedSums.get(key);
            if (memoizedSum !== undefined) {
              sumOfElements = memoizedSum;
            } else {
              sumOfElements =
                nums1[index1] + nums2[index2] + nums3[index3] + nums4[index4];
              memoizedSums.set(key, sumOfElements);
            }

            if (sumOfElements == 0) {
              numberOfTuples += 1;
            }
          }
        }
      }
    }
  }
  return numberOfTuples;
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
console.log(fourSumCount([0], [0], [0], [0]));
