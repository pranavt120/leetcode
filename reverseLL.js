
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var reverseListRR = function(prev,current,head){
     if(head === null){
        current.next = prev;
        return current;
     }

     current.next = prev;
     prev = current;
     current = head;
     head = head.next;
     return reverseListRR(prev,current,head);
};
 

var reverseList = function(head) {
    if(head === null){
        return null;
    }
    if(head.next === null){
        return head;
    }
    let prev = head;
    let curr = head.next;
     head = head.next.next;
     prev.next = null;
    return reverseListRR(prev,curr,head);
};

const ll = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const reverseLL = reverseList(ll);
let temp = reverseLL;
while(temp != null){
    console.log(temp.val);
    temp = temp.next;
}