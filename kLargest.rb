# frozen_string_literal: true
# kLargest elements
# psedo
# using a temporary array

# define an empty array
# get the first k elements from the array
# get the min element for the temp arrays
# loop through the rest of the array starting from arr[k..-1]
# for each elements
# check if its greater than min
# if so
# replace the min with these element
# get a new min from the temp array

def kLargest(arr, k)
  temp = arr[0...k]
  rest = arr[k..-1]
  min = temp.min
  status = true
  while status
    rest.each do |i|
      if i > min
        min_index = temp.index(min)
        temp[min_index] = i
      end
      min = temp.min
    end
    status = false
  end
  temp
end

# arr = [1, 23, 12, 9, 30, 2, 50] 
# k = 3
# ==> [30, 23, 50]
arr = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45] 
k = 3
# ==> [50 88 96]

p kLargest(arr, k)
