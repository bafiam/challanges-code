// implementing queue using array
// its like a pipe
// add item at the open end 
// use unshift for this => add item at the start push the other forward
// to dequeue, pop the last element which is technically the first element


// create a queue
const create_queue = () => {
  let queue = []
  return queue
}
// add item to queue// enqueue
const add_item_queue = (queue, item) => {
  if (item) {
    return queue.unshift(item)
    
  }

}

// remove item from queue // dequeue
const remove_item_queue = (queue) => {
  if (queue.length === 0) {
    return "queue is empty"
    
  } else {
    queue.pop()
  
  }
}

const queue = create_queue()
add_item_queue(queue, 1);
add_item_queue(queue, 2);
add_item_queue(queue, 3);
remove_item_queue(queue) // expect to remove 1 return [3,2]
console.log(queue) // expect => [3,2,1]