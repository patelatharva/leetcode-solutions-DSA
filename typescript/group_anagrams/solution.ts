function groupAnagrams(strs: string[]): string[][] {
  const sortedAnagramToGroupMap = new Map<string, string[]>();
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (sortedAnagramToGroupMap.has(sortedStr)) {
      sortedAnagramToGroupMap.get(sortedStr)?.push(str);
    } else {
      sortedAnagramToGroupMap.set(sortedStr, [str]);
    }
  }
  const groupedAnagrams: string[][] = [];
  for (const group of sortedAnagramToGroupMap.values()) {
    groupedAnagrams.push(group);
  }
  return groupedAnagrams;
}
console.log(groupAnagrams(["apple", "paple", "ple", "app", "pap", "lep", ""]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
