/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {};
    return Math.min(dpSolve(cost, 0, memo), dpSolve(cost,1, memo));
};


function dpSolve(cost, startIndex, memo ){
    if(startIndex >= cost.length){
        return 0;
    }
    if(memo[startIndex]){
        return memo[startIndex];
    }
    const oneStair =  cost[startIndex] + dpSolve(cost, startIndex + 1, memo);
    const twoStair = cost[startIndex] + dpSolve(cost, startIndex + 2, memo);

    memo[startIndex] = Math.min(oneStair , twoStair);
    return memo[startIndex];
}

const cost = minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]);
console.log(cost);