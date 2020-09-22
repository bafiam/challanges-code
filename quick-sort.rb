# frozen_string_literal: true

# partition
# set a pivot
# all elements less that pivot will be on the left
# all elements greater than the pivot will be on the right
# psedo

# partition(arr, start=0, last= arr.length-1)
# set pivot arr[last]
# i = start
# loop starting from start all the way to last minus 1
# j = start
# check if arr[j] <= pivot
# if so swap i with j
# arr[0], arr[1] = arr[1], arr[0]
# increment i
# end of loop
# swap arr[i] with the pivot element
# arr[i], arr[last] = arr[last], arr[i]
# return i

def partition(arr, start, last)
  pivot = arr[last]
  i = start
  (start...last).each do |j|
    if arr[j] <= pivot
      arr[i], arr[j] = arr[j], arr[i]
      i += 1
    end
  end
  arr[i], arr[last] = arr[last], arr[i]
  p arr
  i
end

## quick sort recursive

# quickSort(arr, start, last)
# recursive break will be :
# while/if start if less that last
# get the partation index
# pi = partition(arr, start, last)
# quickSort(arr, start, pi-1)
# quickSort(arr, pi+1, last)

def quick_sort(arr, start, last)
  if start < last
    pi = partition(arr, start, last)

    quick_sort(arr, start, pi-1)
    quick_sort(arr, pi+1, last)
  end
  arr
end

arr = [10, 80, 30, 90, 40, 50, 70]
# arr = [10, 7, 8, 9, 1, 5]
n = arr.length - 1
p quick_sort(arr, 0, n)
