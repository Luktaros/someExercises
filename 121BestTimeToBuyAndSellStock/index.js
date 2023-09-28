/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let profit = 0;
  let oldPrice = prices[0];

  for (const currentPrice of prices){
    if (oldPrice - currentPrice > 0){
      oldPrice = currentPrice;
    }

    if (currentPrice - oldPrice > profit){
      profit = currentPrice - oldPrice;
    };
  }

  return profit;
};
