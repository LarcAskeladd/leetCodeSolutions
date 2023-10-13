function maxProfit(prices: number[]): number {
    // let sortedArray = prices.slice();
    // sortedArray.sort();
    // let lowestInd = 0;
    // let highestInd = sortedArray.length - 1;
    // while(lowestInd < sortedArray.length - 1) {
    //     if(prices.indexOf(sortedArray[highestInd]) > prices.indexOf(sortedArray[lowestInd])){
    //         return sortedArray[highestInd] - sortedArray[lowestInd];
    //     } else {
    //         if((highestInd - lowestInd) === 1) {
    //             lowestInd++;
    //             highestInd = sortedArray.length - 1;
    //         } else {
    //             highestInd--;
    //         }
    //     }
    // }
    // return 0;
    let buyPrice = prices[0];
    let profit = 0;

    for(let ind = 1; ind < prices.length; ind++) {
        buyPrice = Math.min(buyPrice, prices[ind]);
        profit = Math.max(profit, (prices[ind] - buyPrice))
    }

    return profit;
};
