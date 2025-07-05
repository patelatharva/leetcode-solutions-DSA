function largestAltitude(gain: number[]): number {
    let maxValue = Number.NEGATIVE_INFINITY;
    const alt = new Array(gain.length + 1).fill(0);
    for (let i = 0; i < alt.length; i++) {
        if (i > 0) {
            alt[i] = alt[i-1] + gain[i-1];
        }

        if (maxValue < alt[i]) {
            maxValue = alt[i];
        }
    }
    return maxValue;
}
