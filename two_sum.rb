# frozen_string_literal: true

# Given an array of integers nums and an integer target,
# return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution,
# and you may not use the same element twice.

# You can return the answer in any order

def two_sum(nums, target)
  results = []
  i = 1
  while i < nums.length
    diff = target - nums[i - 1]
    if nums[i..-1].include?(diff)
      idx = nums[i..-1].index(diff)
      results << i - 1 << idx + i
    end

    i += 1
  end

  results
end

p two_sum([-1, -2, -3, -4, -5], -8)
# ==> [2,4]

p two_sum([0, 4, 3, 0], 0)
# ==> [0,3]
