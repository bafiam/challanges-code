# frozen_string_literal: true

# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears
# at least twice in the array,
# and it should return false if every element is distinct.

# Example 1:

# Input: [1,2,3,1]
# Output: true
# Example 2:

# Input: [1,2,3,4]
# Output: false
# Example 3:

# Input: [1,1,1,3,3,4,3,2,4,2]
# Output: true

# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
  my_hash = Hash.new(0)
  results = []
  nums.each { |i| my_hash[i] += 1 }
  my_hash.each { |_k, v| results << (v > 1) }
  return true if results.include?(true)

  false
end
