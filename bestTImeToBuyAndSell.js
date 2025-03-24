/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices <= 1){
        return 0;
    }
    let min = Math.min();
    let max = 0;
    for(let i = 0; i< prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
            const m = findMax(prices.slice(i));
            if(Math.abs(m - prices[i]) > max){
                max = Math.abs(m - prices[i]);
            }
        }
    }

    return max;
    
};

function findMax(prices){
    let max = prices[0];
    for(let p of prices){
        if(p > max){
            max = p;
        }
    }
    return max;
}


const prices = [1,2];
const profit = maxProfitHeap(prices);
console.log(profit);



// Efficient solution 

var maxProfit = function(prices) {
    let stock=prices[0];
    let profit = 0;
    for (let i=0; i < prices.length; i++){
        if(prices[i] < stock){
            stock = prices[i]
        }else if((prices[i]-stock>0) && (profit < prices[i]-stock)){
            profit = prices[i]-stock
        }
    }
    return profit
};