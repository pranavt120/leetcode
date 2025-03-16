

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
var mergeTwoLists = function(list1, list2) {
    if(list1 === null && list2 === null){
        return null;
    }else if(list1 === null){
        return list2;
    }else if(list2 === null){
        return list1;
    }

     const finalList = new ListNode(list1.val <= list2.val ? list1.val : list2.val );
    if(list1.val <= list2.val){
        list1 = list1.next
    }else{
        list2 = list2.next;
    }
    merge(list1, list2, finalList);

    let temp = finalList;
    while(temp.next !== null){
        console.log(temp.val);
        temp = temp.next;
    }

    return finalList;
};

function merge(list1,list2,finalList){
    if (list1 === null) {
        let head = finalList;
        while(head.next !== null){
            head = head.next;
        }
        head.next = list2;
        return;
    }
    if (list2 === null) {
        let head = finalList;
        while(head.next !== null){
            head = head.next;
        }
        head.next = list1;
        return;
    }

    if(list1.val <= list2.val){
        const node = new ListNode(list1.val);
        let head = finalList;
        while(head.next !== null){
            head = head.next;
        }
        head.next = node;
        list1 = list1.next;
    }else{
        const node = new ListNode(list2.val);
        let head = finalList;
        while(head.next !== null){
            head = head.next;
        }
        head.next = node;
        list2 = list2.next;
    }
    merge(list1, list2, finalList);


}

const list1 = new ListNode(1,new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1,new ListNode(3, new ListNode(4)));

mergeTwoLists(list1, list2);