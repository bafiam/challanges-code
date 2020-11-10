/**
 * Naive hash implementation
 * has a bucket of length 2 initialized to two empty elements
 * use this base length to get the index using module 
 * eg word key of length 2 eg or = > 2%2 = 0 so index 0;
 */
class NaiveHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }
  keyLength(key) {
    return key.toString().length;
  }
  getIndex(key) {
    const indexHash = this.keyLength(key);
    const index = indexHash % this.buckets.length;
    return index;
  }

  set(key, value) {
    const bucketIndex = this.getIndex(key);
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value });
    } else {
      this.buckets[bucketIndex] = [{ key, value }];
    }
    return this;
  }
  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }
}
const hashMap = new NaiveHashMap();
hashMap.set("cat", 2);
hashMap.set("rat", 7);
hashMap.set("rpaa", 12);
console.log(hashMap.buckets);
