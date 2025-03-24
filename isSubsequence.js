/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const str = returnSubsequence(s,t);
    return str === s;

};

function returnSubsequence(s, t){
    let ptr1 = 0;
    let str = "";
    for(let i = 0; i< t.length; i++ ){
        if(ptr1 <= t.length && t[i] === s[ptr1]){
            str += s[ptr1];
            ptr1++;
        }
    }
    return str;
}

let bool = isSubsequence("ace", "abcde");
console.log(bool);