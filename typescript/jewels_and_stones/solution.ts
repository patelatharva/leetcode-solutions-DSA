function numJewelsInStones(jewels: string, stones: string): number {
  const jewelTypes = new Set<string>(jewels.split(""));
  let totalJewels = 0;
  for (const stone of stones.split("")) {
    if (jewelTypes.has(stone)) {
      totalJewels += 1;
    }
  }
  return totalJewels;
}

console.log(numJewelsInStones("aA", "aAAbbb"));
