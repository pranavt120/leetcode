class Node{
    constructor(key){
        this.key = key;
    }
}

class Tree{
    constructor(key){
        this.root = new Node(key);
    }
}

Tree.prototype.traverse = function(){
    let current  = this.root;
    this.recurse(current);
    
}

Tree.prototype.recurse = function(root){
    if(!root.left && !root.right){
        console.log(root.key);
        return root.key;
    }

    // Inorder traversal
    // this.recurse(root.left);
    // console.log(root.key);
    // this.recurse(root.right);

    // PreOrder
    // console.log(root.key);
    // this.recurse(root.left);
    // this.recurse(root.right);

    // post order
    this.recurse(root.left);
    this.recurse(root.right);
    console.log(root.key);

    return;
}



Tree.prototype.height = function(){
    if(!this.root.left && !this.root.right){
        return 1;
    }
    let current = this.root;
    console.log(this.findHeight(current));
    
}

Tree.prototype.findHeight = function(root){
    if(!root.left && !root.right){
        return 1;
    }
    let left = 1;
    let right = 1;

    if(root.left){
        left += this.findHeight(root.left);
    }

    if(root.right){
        right += this.findHeight(root.right);

    }

    return Math.max(left, right);
}


Tree.prototype.findKthNodes = function(k){
    let current  = this.root;
    let nodes = this.kthNode(current,k);
    console.log(nodes);
}

Tree.prototype.kthNode = function(root, k){
    let nodes = [];
    if(k === 0){
        return root.key;
    }
    if(!root.left && !root.right){
        return;
    }
    

    if(root.left){
        let left = this.kthNode(root.left,k -1);
        if(left){
            nodes.push(left);
        }
    }
    
    if(root.right){
        let right = this.kthNode(root.right,k-1);
        if(right){
            nodes.push(right);
        }
    }
    return nodes;
}


Tree.prototype.breadthFirstTraversal = function(){
    let current  = this.root;
    let queue = [];
    queue.push(current);
    while(queue.length > 0){
        let item = queue.shift()
        console.log(item.key);
        if(item.left){
            queue.push(item.left);
        }
        if(item.right){
            queue.push(item.right);
        }

    }
}

Tree.prototype.lineByLineTraversal = function() {
    let queue = [];
    queue.push(this.root);
    queue.push(null);
    while(queue.length > 1){
        let item = queue.shift();
        if(item === null){
            queue.push(null);
            console.log();
            continue;
        }else{
            process.stdout.write(`${item.key} `)
        }
        if(item.left){
            queue.push(item.left);
        }
        if(item.right){
            queue.push(item.right);
        }
    }
}


Tree.prototype.size = function(root){
    if( !root.left && !root.right){
        return 1;
    }

    let left = 0,right = 0;

    if(root.left){
        left = this.size(root.left);
    }

    if(root.right){
        right = this.size(root.right);
    }
    
    return left+ right + 1;
};


Tree.prototype.max = function(root){
    if(!root){
        return Number.MIN_SAFE_INTEGER;
    }

    return Math.max(root.key, Math.max(this.max(root.left), this.max(root.right)));
}

Tree.prototype.leftView = function(root){
    if(!root){
        return; 
    }
    console.log(root.key);
    this.leftView(root.left);
    return;
}


Tree.prototype.isChildrenSum = function(root){
    if(!root.left && !root.right){
        return true;
    }

    return root.key === (root.left.key + root.right.key) && this.isChildrenSum(root.left) && this.isChildrenSum(root.right) ;
}

Tree.prototype.isBalanced = function(root){
    let balance = this.checkBalance(root);
    return balance <=1 ;
}


Tree.prototype.checkBalance = function(root){
    if(!root.left && !root.right){
        return 1;
    }

    let left = 0, right = 0;
    if(root.left){
        left = 1;
        left += this.checkBalance(root.left);
    }
    if(root.right){
        right =1;
        right += this.checkBalance(root.right);
    }

    return Math.abs(left - right);
}


Tree.prototype.maxWidth = function(root){
    const queue = [];
    let max = Number.MIN_SAFE_INTEGER;
    queue.push(root);
    while( queue.length > 0){
        let length = queue.length;
        if(length  > max){
            max = length;
        }
        for(let i = 0; i< length; i++){
            const el = queue.shift();
            if(el.left){
                queue.push(el.left);
            }
            if(el.right){
                queue.push(el.right);
            }
        }

    }

    return max;
}


Tree.prototype.bttoDll = function(root){
    if(!root){
        return root;
    }

    let head = this.bttoDll(root.left);
    if(prev === null){
        head = root;
    }else{
        root.left = prev;
        prev.right = root;
    }

    prev = root;
    this.bttoDll(root.right);
    return head;
}


Tree.prototype.traverseSpiral = function(root){
    let queue = [];
    let stack = [];
    let reverse = false;
    queue.push(root);
    while(queue.length > 0){
        let len = queue.length;
        for(let i = 0; i< len; i++){
            removed = queue.shift();
            if(reverse){
                stack.push(removed);
            }else{
                console.log(removed.key);
            }

            if(removed.left){
                queue.push(removed.left);
            }
            if(removed.right){
                queue.push(removed.right);
            }
        }

        if(reverse){
            while(stack.length > 0){
                console.log(stack.pop().key);
            }
        }
        reverse = !reverse;
    }

}


// using 2 stacks
Tree.prototype.traverseSpiralEfficient = function(root){
    let s1 = [];
    let s2 = [];
    s1.push(root);

    while(s1.length > 0 || s2.length > 0){
        while(s1.length > 0){
            let item = s1.pop();
            if(item.left){
                s2.push(item.left);
            }
            if(item.right){
                s2.push(item.right);
            }

            console.log(item.key)
        }

        while(s2.length > 0){
            let item = s2.pop();
            if(item.right){
                s1.push(item.right);
            }
            if(item.left){
                s1.push(item.left);
            }

            console.log(item.key)
        }
    }
}


Tree.prototype.diameter = function(root, max){
    if(!root.left && !root.right){
        return 1;
    }

    let left = 0;
    let right = 0;

    if(root.left){
         left = 1;
         left +=  this.diameter(root.left, max);

    }
    if(root.right){
        right = 1;
        right += this.diameter(root.right,max);

    }

    if(max < (left + right) - 1){
        max = left + right - 1;
    }

    return max ;
}

Tree.prototype.lca = function(root,queue, n){
    if(!root){
        return false;
    }

    if(root.key === n){
        queue.push(root.key);
        return true;
    }
    
    let left = this.lca(root.left, queue, n);
    if(left){
        queue.push(root.key);
    }
    let right = this.lca(root.right, queue, n);
    if(right){
        queue.push(root.key);
    }

    return left || right;
    
}


Tree.prototype.lcaEfficient = function(root, arr){
    if(!root){
        return false;
    }

    if(arr.includes(root.key)){
        return root.key;
    }

    let left , right;
    left = this.lca(root.left, arr,);
    right = this.lca(root.right, arr);
   
    if(left && right){
        return root.key;
    }

    if(left){
        return left;
    }else{
        return right;
    }

}

let prev = null;


let tree  = new Tree(10);
// tree.root.left = new Node(15);
// tree.root.right = new Node(20);
// tree.root.left.left = new Node(30);
// tree.root.right.left = new Node(40);
// tree.root.right.right = new Node(50);
// tree.root.right.left.left = new Node(60);
// tree.root.right.left.right = new Node(70);
tree.root.left = new Node(20);
tree.root.right = new Node(30);
// tree.root.left.left = new Node(30);
// tree.root.left.right = new Node(80);
// tree.root.left.right.right = new Node(90);
// tree.root.left.right.right.right = new Node(18);
// tree.root.left.left.left = new Node(40);
// tree.root.left.left.right = new Node(50);
// tree.root.left.left.left.left = new Node(60);
tree.root.right.left = new Node(40);
tree.root.right.right = new Node(50);
tree.root.right.left.left = new Node(60);
tree.root.right.right.left = new Node(70);
tree.root.right.right.right = new Node(80);
// tree.root.left.left.right = new Node(9);
// tree.root.right.left.left = new Node(10);


// console.log(tree.left(tree.root));
// console.log(tree.maxWidth(tree.root));

// const head = tree.bttoDll(tree.root);
// let temp = head;
// while(temp){
//     console.log(temp.key);
//     temp = temp.right;
// }


// tree.traverseSpiralEfficient(tree.root);

// console.log(tree.diameter(tree.root, Number.MIN_SAFE_INTEGER));


// console.log(tree.lcaEfficient(tree.root,[80,30]));

const leftPath = [], rightPath = [];
tree.lca(tree.root, leftPath, 80);
tree.lca(tree.root, rightPath, 60);
console.log();


