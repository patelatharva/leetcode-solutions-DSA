class RandomizedSet {
  mySet: Set<number>;
  constructor() {
    this.mySet = new Set<number>();
  }

  insert(val: number): boolean {
    const returnValue = !this.mySet.has(val);
    this.mySet.add(val);
    return returnValue;
  }

  remove(val: number): boolean {
    return this.mySet.delete(val);
  }

  getRandom(): number {
    const valuesInSet = Array.from(this.mySet.values());
    const randomIndex = Math.floor(Math.random() * valuesInSet.length);
    return valuesInSet[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const obj = new RandomizedSet();
const param_1 = obj.insert(1);
console.log("param_1 " + param_1);
const param_2 = obj.remove(1);
console.log("param_2 " + param_2);
const param_4 = obj.insert(2);
console.log("param_4 " + param_4);
const param_3 = obj.getRandom();
console.log("param_3 " + param_3);
