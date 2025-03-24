/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0){
        return 0;
    }
    const memo = {};
    return dpSolve(n, memo); 
};

function dpSolve(n ,memo){
    if( n === 1 || n === 2){
        return 1;
    }

    if(memo[n]){
        return memo[n];
    }

    memo[n] =  dpSolve(n-1, memo) + dpSolve(n-2, memo);
    return memo[n];

}

console.log(fib(7));