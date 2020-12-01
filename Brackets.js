// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

function solution(S) {
  
  if(S.length != 0){

 
  let S_char = S.split("")
  let opening = ["(", "{","["]
  let closing = [")","}","]"]
  let results = []
  S_char.forEach(element => {
      if(opening.includes(element)){
          results.push(element)
      }else if(closing.includes(element)){
          if(checkers(results[results.length-1], element)){
              results.pop()
          }
      }

  })
  if(results.length === 0){
      return 1
  }else{
      return 0
  }
   }else{
       return 1
   }
}
function checkers(opener, closer) {
  if (opener === "(" && closer === ")"){
     return 1 
  }
   if (opener === "{" && closer === "}"){
     return 1 
  }
   if (opener === "[" && closer === "]"){
     return 1 
  }
  return 0
}