function mergeAlternately(word1: string, word2: string): string {
    const merged = []
    for (let i = 0; i < word1.length && i < word2.length; i++) {
        merged.push(word1[i]);
        merged.push(word2[i]);
    }
    if (word1.length > word2.length) {
        for (let i = word2.length; i < word1.length; i++) {
            merged.push(word1[i]);
        }
    } else if (word2.length > word1.length) {
        for (let i = word1.length; i < word2.length; i++) {
            merged.push(word2[i]);
        }
    }
    return merged.join("");
}
