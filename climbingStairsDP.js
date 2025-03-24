function climbingStaris(n, memo){

    if(n <= 1){
        return 1;
    }

    if(memo[n]){
        return memo[n];
    }

    memo[n] = climbingStaris(n-1, memo) + climbingStaris(n-2, memo);
    return memo[n];
}


const memo = {};
const ways = climbingStaris(38,memo);
console.log(ways);