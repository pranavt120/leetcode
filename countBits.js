/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
   const array = [0,1];
   const memo = {};
   let i = 2;
   while(i <= n){
    array.push(divideDP(i, memo));
    i++;
   }

   console.log(array);
    
};

function divideDP(number , memo){
    if(number <= 1){
        return 1;
    }

    if(memo[number]){
        return memo[number];
    }

    memo[number] =  divideDP(Math.floor(number / 2), memo) + number % 2;
    return memo[number];
}

countBits(5);




// Efficient solution using bit mainpulation
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let count = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        count[i] = count[i >>> 1] + (i & 1)
    }
    return count
};