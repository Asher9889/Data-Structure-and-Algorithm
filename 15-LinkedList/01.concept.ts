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


function main(){

    let arr = [1,2,3,4,5];

    function convertArr2LL(){
        const head = new Node(arr[0]);
        let temp = head;

        for(let i = 1;i < arr.length; i++){
            const newNode = new Node(arr[i]);
            temp.next = newNode;
            temp = newNode;
        }
        return head;
    }

    function printLL(head:Node){
        if(!head) return head;
        let temp:Node | null = head;
        let values = ""
        while(temp){
            values = (values + temp.data + " => ");
            temp = temp.next;
        }

        console.log(values);
    }

    function removeFromHead(head:Node){
        /**
         * 1. Check head is correct node with value.
         * 2. First Check atleast two nodes are present.
         */
        if(!head || head.next === null) return head;
        // let temp = head; // garbage collector will collect will no manually need to free uo the memory.
        let newHead = head.next;
        return newHead;
    }


    function removeFromTail(head:Node){
        /**
         * 1. First check atleast ll has two nodes.
         * 2. Iterat over ll and check for this cond temp.next.next === null it means it is a last node
         * 
         */
        if(!head || head.next === null) return head;

        let temp = head;
        while(temp.next!.next !== null){
            temp = temp.next!;
        }

        temp.next = null;

        return head;

    }


    const head = convertArr2LL()
    printLL(head);
    removeFromTail(head);
    printLL(head);




}
main()





export { }