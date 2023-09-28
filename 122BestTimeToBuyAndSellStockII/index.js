/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let totalProfit = 0;
  let stockBoughtAt = 0;
  let sell = false;

  for (const [day, stockPrice] of prices.entries()){
    if (sell){
      totalProfit += stockPrice - stockBoughtAt;
      sell = false;
    }

    let profit = prices[day + 1] - stockPrice;
  
    if (profit > 0){
      stockBoughtAt = stockPrice;
      sell = true;
    }
  }

  return totalProfit;
};
