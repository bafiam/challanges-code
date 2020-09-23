# frozen_string_literal: true

# Write a method that will determine
# the first non-repeating character in a string.

# Approch: use hashmaps

# psedo
# create a hash
# convert the word to its chars inside an array
# transverse through the array creating key and incrementing their count

# return the key with a value of 1

def firstNonRepeating(str)
  my_hash = Hash.new(0)
  str.chars.each { |y| my_hash[y] += 1 }

  my_hash.each do |i|
    if i[1] == 1
      return i[0]
    end
  end
end

# str = 'GeeksforGeeks'
str = "GeeksQuiz"
p firstNonRepeating(str)
