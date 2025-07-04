function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let m = n;
    for (let i = 0; i < flowerbed.length && m > 0; i++) {
        if (
            (i - 1 < 0 || (flowerbed[i-1] == 0)) &&
            (i + 1 >= flowerbed.length || (flowerbed[i+1] == 0)) &&
            flowerbed[i] == 0
        ) {
            flowerbed[i] = 1;
            m -= 1;
        }
    }
    return m == 0;
}
