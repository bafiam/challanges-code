// that, given two non-empty arrays A and B consisting of N integers, returns the number of fish that will stay alive.

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let fish_up = 0
  let res = []
  let fish_left = 0
  for(let i = 0; i < B.length; i++){
     if(fish_up === B[i]){
         while(res.length !== 0 && res[res.length-1] < A[i]){
             res.pop()
         }
         if(res.length === 0){
             fish_left++
         }

     }else{
         res.push(A[i])
     }

  }
 
  return fish_left + res.length

}