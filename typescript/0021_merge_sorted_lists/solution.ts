class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergedHead: ListNode | null = null;
    let mergedCurr: ListNode | null = null;
    let curr1 = list1;
    let curr2 = list2;

    while (curr1 != null && curr2 != null) {
        let newNode = new ListNode();
        if (curr1.val < curr2.val) {
            newNode.val = curr1.val;
            curr1 = curr1.next;
        } else {
            newNode.val = curr2.val;
            curr2 = curr2.next;
        }

        if (mergedCurr) {
            mergedCurr.next = newNode;
        }

        mergedCurr = newNode;
        if (!mergedHead) {
            mergedHead = mergedCurr;
        }
    }
    while (curr1 != null) {
        let newNode = new ListNode(curr1.val);
        if (mergedCurr) {
            mergedCurr.next = newNode;
        }
        mergedCurr = newNode;
        if (!mergedHead) {
            mergedHead = mergedCurr;
        }
        curr1 = curr1.next;
    }
    while (curr2 != null) {
        let newNode = new ListNode(curr2.val);
        if (mergedCurr) {
            mergedCurr.next = newNode;
        }

        mergedCurr = newNode;
        if (!mergedHead) {
            mergedHead = mergedCurr;
        }
        curr2 = curr2.next;
    }
    return mergedHead;
}
