
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let removeRecrse = function(head, temp, val){
    if(temp === null){
        return head;
    }

    if(head.val === val){
        head = head.next;
        temp  = head;
    }
    else if(temp.next && temp.next.val === val && temp.next.next !== null){
        temp.next = temp.next.next;
        if(temp.next && temp.next.val === val){
            removeRecrse(head,temp,val);
        }
        temp = temp.next;

    }else if(temp.next && temp.next.val === val && temp.next.next == null){
        temp.next = null;
        if(temp.next && temp.next.val === val){
            removeRecrse(head,temp,val);
        }
        temp = temp.next;

    }else{
        temp = temp.next;
    }
    return removeRecrse(head,temp,val);

}
 

var removeElements = function(head, val) {
    let temp = head;
    let hd = removeRecrse(head, temp, val);
    while(hd !== null){
        console.log(hd.val);
        hd = hd.next;
    }
    
};

//  const ll = new ListNode(1,new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5,new ListNode(6)))))));
// const ll = new ListNode(7,new ListNode(7, new ListNode(7, new ListNode(7))));
// const ll = new ListNode(1);

const ll = new ListNode(1,new ListNode(2, new ListNode(2, new ListNode(1))));


removeElements(ll, 2);
