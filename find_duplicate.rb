# frozen_string_literal: true

# Given an array of integers nums containing n + 1
# integers where each integer is in the range [1, n] inclusive.

# There is only one duplicate number in nums, return this duplicate number.
# Input: nums = [1,3,4,2,2]
# Output: 2
# Example 2:

# Input: nums = [3,1,3,4,2]
# Output: 3
# Example 3:

# Input: nums = [1,1]
# Output: 1
# Example 4:

# Input: nums = [1,1,2]
# Output: 1

# @param {Integer[]} nums
# @return {Integer}
def find_duplicate(nums)
  my_hash = Hash.new(0)
  nums.each { |i| my_hash[i] += 1 }
  my_hash.each do |k, v|
    return k if v > 1
  end
end
