function uniqueOccurrences(arr: number[]): boolean {
    const occ = {};
    arr.forEach(x => {
        if (x in occ) {
            occ[x] += 1;
        } else {
            occ[x] = 1;
        }
    })

    const distOcc = new Set();
    let hasDuplicate = false;
    Object.values(occ).forEach((occValue) => {

        if (distOcc.has(occValue)) {
            hasDuplicate = true;
        }
        distOcc.add(occValue);
    });
    return !hasDuplicate;
}
