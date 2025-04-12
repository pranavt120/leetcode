class Node {
    constructor(key){
        this.key = key;
    }
}

class Tree{

    preIndex = 0;
    mapObj = {};

    constructor(node){
        this.root = node;
    }

    construct(inOrder, preOrder, startIndex, endIndex){

        if(startIndex > endIndex){
            return null;
        }

        let tNode = new Node(preOrder[this.preIndex++]);

        if(startIndex === endIndex){
            return tNode;
        }

        let indexFound = this.mapObj[tNode.key];

        tNode.left = this.construct(inOrder, preOrder, startIndex, indexFound - 1);
        tNode.right = this.construct(inOrder, preOrder, indexFound + 1, endIndex);


        return tNode;
    }

    constructTree(inOrder, preOrder){
        inOrder.forEach((el, index) => this.mapObj[el] = index);

        return this.construct(inOrder, preOrder, 0, inOrder.length);
    }

    traverse = function(){
        let current  = this.root;
        this.recurse(current);
        
    }
    
    recurse = function(root){
        if(!root.left && !root.right){
            console.log(root.key);
            return root.key;
        }
    
        // Inorder traversal
        this.recurse(root.left);
        console.log(root.key);
        this.recurse(root.right);
    
        // PreOrder
        // console.log(root.key);
        // this.recurse(root.left);
        // this.recurse(root.right);
    
        // post order
        // this.recurse(root.left);
        // this.recurse(root.right);
        // console.log(root.key);
    
        return;
    }
}


const inOrder = ['D', 'B', 'E', 'A', 'F', 'C'];
const preOrder = ['A', 'B', 'D', 'E', 'C', 'F'];

let tree = new Tree();
tree.root = tree.constructTree(inOrder, preOrder);
tree.traverse();