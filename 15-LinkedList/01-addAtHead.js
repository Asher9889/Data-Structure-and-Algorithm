/**
 * Adds a new node to the head (beginning) of the linked list.
 * 
 * @function addAtHead : adds new node to head of the LL.
 * @param {Node} head - The current head node of the linked list.
 * @param {*} data - The data to store in the new node.
 * @returns {Node} - The new head of the linked list.
 */

function createNode(data){
    return {
        value: data,
        next: null
    }
};

let head = null;

function addAtHead(head, data) {
    const newNode = createNode(data);
    newNode.next = head;
    head = newNode;
    return head;
}


head = addAtHead(head, 63)
head = addAtHead(head, 89);

console.log(head)