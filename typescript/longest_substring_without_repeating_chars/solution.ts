function lengthOfLongestSubstring(s: string): number {
  let longestLength = 0;
  if (s.length > 0) {
    longestLength = 1;
  }
  for (let start = 0; start < s.length; start++) {
    const charsFound = new Set<string>();
    let lengthOfCurrentSubStr = 0;
    for (let currentPos = start; currentPos < s.length; currentPos++) {
      if (charsFound.has(s[currentPos])) {
        break;
      } else {
        lengthOfCurrentSubStr += 1;
        charsFound.add(s[currentPos]);
      }
    }
    if (lengthOfCurrentSubStr > longestLength) {
      longestLength = lengthOfCurrentSubStr;
    }
  }
  return longestLength;
}

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("abcabcbb"));
