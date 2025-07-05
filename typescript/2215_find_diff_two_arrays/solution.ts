function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const answer: Array<Array<number>> = new Array(2);
    const dist1 = Array.from(set1);
    answer[0] = dist1.filter(x => !set2.has(x));
    const dist2 = Array.from(set2);
    answer[1] = dist2.filter(x => !set1.has(x));
    return answer;
}
