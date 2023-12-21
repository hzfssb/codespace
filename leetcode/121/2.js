//  贪心,总是做出在当前看来是最好的选择,不从整体最优上加以考虑，得到局部最优
function maxProfit(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i=1; i<prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            profit = Math.max(prices[i]-min,profit);

        }else
        min = Math.min(min,prices[i])

    }
    return profit;

}