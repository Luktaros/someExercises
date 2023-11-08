/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
function buyChoco(prices, money) {
  let result = money;
  let cheapestChoco = Infinity;
  let secondCheapestChoco = Infinity;

  prices.forEach((price) => {
    if(price < secondCheapestChoco){
      if (price < cheapestChoco){
        secondCheapestChoco = cheapestChoco;
        cheapestChoco = price;
      } else {
        secondCheapestChoco = price;
      }
    }
  })

  const checkForChange = money - cheapestChoco - secondCheapestChoco;

  if (checkForChange >= 0){
    result = checkForChange;
  }

  return result;
};

