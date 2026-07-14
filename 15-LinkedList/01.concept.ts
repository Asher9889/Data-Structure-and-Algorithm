/**
 * What is Linked List?
 * Ans: Linked list is a liner data structure which stored data and next memory reference inside each node and these connected with next memory refernce pointer. Main advantage of using an linked list is for inerstion an elem in the array we must have to shift an elem +1 position but in linked list we just need to create a node and attach it to it needed place.
 * Only Disadvantage is in array we can access any elem in o(1) tc. but in linkedlist we need to traverse from head to acess the elem which have o(n) tc.
 * 
 * Array need an contigour memory location but linked list nodes and be in any random location in heap.
 */

/**
 * Step 01: Create a node.
 * Step 02: Connect it to each other. using next keyword.
 * Remember next keyword will store the refernce to next node.
 */

class Node {
    data: number;
    next: Node | null;

    constructor(data:number, next=null){
        this.data = data;
        this.next = next
    }

}

const head = new Node(1);
const n2 = new Node(2);
const tail = new Node(3);

/**
 * Convert an Arrya to LL
 */

const arr = [1,2,3,4,5]

function convertArrtoLL(arr: number[]){
    if (arr.length === 0) return null;

    const head = new Node(arr[0]);
    let temp = head;
    for(let i = 1; i < arr.length; i++){
        const newNode = new Node(arr[i]);
        temp.next = newNode;
        temp = newNode;
    }
    return head;
}

const ll = convertArrtoLL(arr);

console.log(JSON.stringify(ll));

export {}