//  element represents stock price and index is day
// 0 is monday
const stockPrice = [3, 2, 1, 8, 5, 4, 9];

function maxProfit(stockArr) {
  let currentMinimum = stockArr[0];
  let buyDay;
  let highestSellPrice;
  // for buying the stock
  for (let i = 1; i < stockArr.length; i++) {
    if (stockArr[i] < currentMinimum) {
      currentMinimum = stockArr[i];
      buyDay = i;
      console.log("buyDay is: ",buyDay)
    }
  }
  // for selling the stock
  for (let i = buyDay; i < stockArr.length; i++) {
    if (currentMinimum < stockArr[i]) {
      highestSellPrice = stockPrice[i];
    }
  }

  let profit = highestSellPrice - currentMinimum;

  return { profit: profit };
}

console.log(maxProfit(stockPrice));
