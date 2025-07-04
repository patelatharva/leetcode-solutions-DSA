function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let answer = new Array(candies.length).fill(false);
    let sortedCandies = [...candies];
    sortedCandies.sort((a, b) => a - b);
    for (let i = 0; i < candies.length; i++) {
        let foundMoreCandies = candies[i] + extraCandies < sortedCandies[candies.length - 1];
        answer[i] = !foundMoreCandies;
    }
    return answer;
}
