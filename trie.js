
class TrieNode{
    constructor(){
        this.children = new Array(26);
        this.end = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
}

Trie.prototype.insert = function(word){
    let current = this.root;
    for( let i = 0; i<= word.length; i++){
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0);

        if(!current.children[index]){
            current.children[index] = new TrieNode();
        }
        current = current.children[index];
    }
    current.end = true;
}

Trie.prototype.search = function(word){
    let node = this.searchNode(word);
    return node != null && node.end;
}


Trie.prototype.searchNode = function(word){
    let current = this.root;
    for(let i = 0; i<= word.length; i++){
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
        if(!current.children[index]){
            return null;
        }
        
        current = current.children[index];
        
    }

    return current;
}

const trie = new Trie();
trie.insert("pranav");
console.log(trie.search("pr"));