/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const op = [words[0]];
    for(let i = 0, j = 1; j< groups.length; j++){
        if(groups[i] != groups[i+1]){
            op.push(words[j]);
            i = j;
        }
    }

    return op;
};

console.log(getLongestSubsequence(["a","b","c","d"], [1,0,1,1]));
