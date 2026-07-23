/**
 * What is linked list?
 * Answere: 1. It is a liner data structure made up of node.
 * 2. Each node stores the data and reference to next node.
 * 3. Unlike array, Node get stores in heap memory at a non-contigous fashion.
 * 4. To access any elem we must need to traverse from head so it takes O(n) tc.
 */


class Node {
    data: number;
    next: Node | null;

    constructor(data: number, next: Node | null = null) {
        this.data = data;
        this.next = next;
    }
}

function convertArr2LL(arr: number[]) {
    const head = new Node(arr[0]);
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        temp.next = newNode;
        temp = newNode;
    }
    return head;
}

function printLL(head: Node) {
    if (!head) return head;
    let temp: Node | null = head;
    let values = ""
    while (temp) {
        values = (values + temp.data + " => ");
        temp = temp.next;
    }

    console.log(values);
}

function removeFromHead(head: Node) {
    /**
     * 1. Check head is correct node with value.
     * 2. First Check atleast two nodes are present.
     */
    if (!head || head.next === null) return head;
    // let temp = head; // garbage collector will collect will no manually need to free uo the memory.
    let newHead = head.next;
    return newHead;
}

// 1 => 2 => 3 => 4 => 5

function removeFromTail(head: Node) {
    if (!head || head.next === null) return null;
    let temp = head;

    while (temp.next!.next !== null) { // check is next to next null or not? if found it means got the 2nd last elem
        temp = temp.next!;
    }

    temp.next = null;
    return head;
}

// 1 => 2 => 3 => 4 => 5

function removeKthNumber(head:Node, k:number){
    if(head === null) return null;

    if(k === 1){
        // garbage collector will automatically collect and remove it.
        return head.next;
    }

    let temp = head;
    let cnt = 0;
    let prev:Node | null = null;
    
    while(temp){
        cnt++;

        if(cnt === k){
            prev!.next = prev!.next!.next;
            break;
        }

        prev = temp;
        temp = temp.next!;
    }

    return head;
}

// 1 => 2 => 3 => 4 => 5
function removeElemFromLL(head:Node, elem:number){
    if(head === null) return null;

    if(head.data === elem) {
        return head.next;
    }

    let cnt = 0;
    let prev:Node |  null = null;
    let temp = head;

    while(temp){
        cnt++;
        if(temp.data === elem){
            prev!.next = prev!.next!.next;
            break;
        }

        prev = temp;
        temp = temp.next!;
    }

    return head;
}



function main() {

    let arr = [12,13,56,2,6]
    const head = convertArr2LL(arr)
    printLL(head);
    // removeFromTail(head);
    // const headd = removeKthNumber(head, 6)
    const headd = removeElemFromLL(head, 13);
    printLL(headd as Node);
}

main()


export {}