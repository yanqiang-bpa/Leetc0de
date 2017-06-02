/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var p = head;
    var q = head;
    var step = 0;
    if(!head.next && n==1) {
        return [];
    }
    while(q.next) {
        q = q.next;
        if(step>=n)
            p = p.next;
        step++;
    }
    if(step < n) {
        head = head.next;
    }
    p.next = p.next.next;
    return head;
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// // 1-->2-->3-->4-->5
// var obj1 = new ListNode(1)
// var obj2 = new ListNode(2)
// var obj3 = new ListNode(3)
// var obj4 = new ListNode(4)
// var obj5 = new ListNode(5)
// obj1.next = obj2;
// obj2.next = obj3;
// obj3.next = obj4;
// obj4.next = obj5;

// console.log(removeNthFromEnd(obj1, 5))
