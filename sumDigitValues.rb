# frozen_string_literal: true
# Given a descending list of values, 
# sum the digits of each value to create a new value and 
# return 
# the list of new values ordered from lowest to highest.

# psedo:
# input array in descending ordered
# [1233,123,12,1]
# create empty array as storage for results
# iterate through the array
# for each value
# convert to string
# split it into chars
# loop through each chars
# convert to interger
# sum it up with previus- inject
# unsshift into the storage

def sumDigitValues(arr)
  results = []
  arr.each do |i|
    sum = 0
    i.to_s.chars.each do |y|
      sum += y.to_i
    end
    results.unshift(sum)
  end
  results
end
arr = [12345,1234,123,12, 1]
p sumDigitValues(arr)