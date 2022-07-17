# frozen_string_literal: true

# insertion sorting
# compare the right value with the left value
# the left need to be less than the right
# given = [5,2,4,6,1,3]
# base start at index 1 comparing it to index 0
# start = 1
# compare = start - 1
# while compare is greater than 0 and value at compare  greater than start value
#     value at compare plus 1 is equals to value at compare
#     descrement compare by 1
# value at compare plus 1 is equlas to the start

def insertion_sort(arr)
  start = 1
  compare = start - 1
  arr.each_with_index do |_value, idx|
    next unless idx >= 1

    start = arr[idx]
    compare = idx - 1
    while compare >= 0 && (arr[compare] < start)
      arr[compare + 1] = arr[compare]
      compare -= 1
    end
    
    arr[compare + 1] = start
  end
  arr
end

p insertion_sort([5,100000,2,4,6,1,3])