/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    return (recurCharBuild(k, 'a')).charAt(k - 1);
};


function recurCharBuild(k,word){
    let nextWord = '';
    if(word.length >= k){
        return word;
    }

    for(let i=0; i< word.length; i++){
        nextWord += String.fromCharCode(word.charCodeAt(i)+1);
    }
     word = word+nextWord;
    return recurCharBuild(k, word);
}

console.log(kthCharacter(10));