// stack implementation using array
// complexity
// -> push and pop takes constant time => o(1)

const create_stack = () => {
  const stack = []
  return stack
}

const check_empty = (stack) => {
  if (stack.length === 0) {
    return true
    
  } 
  return false
}

const add_item = (stack, item) => {
  if (item) {
    return stack.push(item)
    
  }

}
const remove_item = (stack) => {
  if (check_empty(stack)) {
    return "stack is empty" 
  } else {
   return  stack.pop()
    
  }

}

let my_stack = create_stack()
add_item(my_stack, "steve");
add_item(my_stack, "boy");
add_item(my_stack, "girl");
// remove_item(my_stack)
// remove_item(my_stack)
// remove_item(my_stack)
// console.log(remove_item(my_stack))
console.log(my_stack)