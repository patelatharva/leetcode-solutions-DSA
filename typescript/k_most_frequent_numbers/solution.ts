function topKFrequent(nums: number[], k: number): number[] {
  const numFreq = new Map<number, number>();
  for (const num of nums) {
    numFreq.set(num, (numFreq.get(num) || 0) + 1);
  }
  function compareFreq(entry1: [number, number], entry2: [number, number]) {
    return entry2[1] - entry1[1];
  }
  const numFreqEntries: [number, number][] = Array.from(numFreq.entries());
  numFreqEntries.sort(compareFreq);
  return numFreqEntries
    .map((entry: [number, number]) => {
      return entry[0];
    })
    .slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
