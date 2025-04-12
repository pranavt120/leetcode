/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    if(sequence.length == 1){
        return sequence === word ? 1 : 0;
     }
     let curr = 0;
     let countLeft = 0;
     let countR = 0;
     for(let i=0; i< sequence.length - 1; i++){
         let subStr = sequence.substring(i, word.length+ i);
         if(subStr === word && curr > countLeft){
             countLeft++;
             curr++;
             i += subStr.length - 1;
         }else if(subStr === word){
             curr++;
         }else{
             curr = 0;
         }
        
        
     }
 
     curr = 0;
 
     for(let i=sequence.length - word.length; i>= 0; i--){
         let subStr = sequence.substring(i, i+ word.length);
         if(subStr === word && curr > countR){
             countR++;
             curr++
              i -= subStr.length - 1;
         }else if(subStr === word){
             curr++;
         }else{
             curr = 0;
         }
        
        
     }
     return Math.max(countLeft, countR);
};





let count = 0;
// const ct = maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", 'aaaba');
const ct = maxRepeating("aabcccbbbcabbaccccbccccaaabcbacbbb", "bb");
console.log(ct);