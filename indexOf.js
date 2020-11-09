// use binary search to find the index of a element
// The array is sorted
const indexOf = (array, element, offset = 0) => {
  let mid = parseInt(array.length/2)
  let current = array[mid]
  if (current === element){
    return offset + mid
  }else if (element > current){
    const right = array.slice(mid)
    return indexOf(right, element, offset+mid)
  }else if (element < current){
    const left = array.slice(0, mid)
    return indexOf(left, element, offset)
  }

}



const directory = ["Adrian", "Bella", "Charlotte", "Daniel", "Emma", "Hanna", "Isabella", "Jayden", "Kaylee", "Luke", "Mia", "Nora", "Olivia", "Paisley", "Riley", "Thomas", "Wyatt", "Xander", "Zoe"];
console.log(indexOf(directory, 'Hanna'));   // => 5
console.log(indexOf(directory, 'Adrian'));  // => 0
console.log(indexOf(directory, 'Zoe')); 
// time complexity
// O(log n)