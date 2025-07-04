function reverseVowels(s: string): string {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vMap = {};
    let vIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vMap[vIndex] = s[i]
            vIndex += 1;
        }
    }
    let answer = Array.from(s);
    let vPos = vIndex - 1;
    for (let sPos = 0; sPos < s.length; sPos++) {
        if (vowels.has(s[sPos])) {
            answer[sPos] = vMap[vPos];
            vPos--;
        }
    }
    return answer.join('');
}
