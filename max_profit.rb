# frozen_string_literal: true

# Say you have an array for which the ith
# element is the price of a given stock on day i.

# If you were only permitted to complete
# at most one transaction (i.e.,
# buy one and sell one share of the stock),
# design an algorithm to find the maximum profit.

# Note that you cannot sell a stock before you buy one.

# used the sliding window method

# @param {Integer[]} prices
# @return {Integer}

def max_profit(prices)
  return 0 if prices.empty? || prices.length <= 1

  output = []
  (1...prices.length).each do |y|
    sub = prices[y..-1]
    next unless y >= 1

    buy = prices[y - 1]
    max = sub.max
    if buy < max
      profit = max - buy
      output << profit
    else
      output << 0

    end
  end
  output.max
end

# Input: [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
# profit = 6-1 = 5.
# Not 7-1 = 6, as selling price needs to be larger than buying price.

# Input: [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transaction is done, i.e. max profit = 0
