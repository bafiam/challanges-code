const binaryGap = (N) => {
  if (Number.isInteger(N) === true && N >= 1 && N <= 2147483647) {
    let bN = parseInt(N).toString(2).split("");
    return getGaps(bN, []);
  }
  return 0;
};
// [
//   '1', '0', '0',
//   '0', '1', '0',
//   '0', '0', '1'
// ]
const getGaps = (bN, sub) => {
  let count = 0;
  

  bN.forEach((value, idx) => {
    if (value === "1") {
      sub.push(idx);
    }
  });
  let comb = []
  let i = 0
  let n = sub.length
  while (i < n ) {
    comb.push(bN.slice(sub[i], sub[i+1]+1).length)
    i++
  }
  let subMax = comb.reduce((a,b) => (Math.max(a, b)))-2
  return  (subMax >= 0)? subMax : 0
};

console.log(binaryGap(328)); // 2
console.log(binaryGap(9)); //2
console.log(binaryGap(529)); //4
console.log(binaryGap(20)); //1
console.log(binaryGap(15)); //0
console.log(binaryGap(32)); //0
console.log(binaryGap(2147483647)); //0