const permMissingElem = (A) => {
  let len = A.length;
  if (len >=1) {
    let min = A.reduce((a, b) => Math.min(a, b));
    return Array.from({ length: len + 1 }, (_i, v) => {
      if (!A.includes(min + v)) {
        return min + v;
      }
    }).filter(Number)[0];
  }
  return []
};
// let A = [4, 5, 7, 8];
let A = [2,4];
console.log(permMissingElem(A));
