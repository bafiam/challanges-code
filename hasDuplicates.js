const hasDuplicates = (arr) => {
  let counter = 0
  let duplicates = []
  for(let outer = 0; outer <= arr.length-1; outer++){
    for(let inner = outer+1; inner <= arr.length; inner++){
      counter++
      if(arr[outer] === arr[inner]){
        duplicates.push(arr[inner])
      }
    }
  }
  console.log(counter)
  return duplicates
}
console.log(hasDuplicates([1,2,3,4]))

// time complexity 
// O(2)