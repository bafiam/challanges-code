// find the max value and its index
const findMax = (arr) => {
  let max;
  let counter = 0;
  for(let i = 0; i <= arr.length; i ++){
    counter ++
    if(max == undefined || max <= arr[i])
    max = arr[i]
  }
  return `The max value is ${max}`


}
console.log(findMax([4,5,6,1,9,2,8,3,7]))

// time complexity
// O(n) -> it went through the entire input