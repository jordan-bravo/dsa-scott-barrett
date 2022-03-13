class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.length === 1) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = null;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return "There's nothing to pop.";
        } else if (this.length === 1) {
            return this.head;
        } else {
            let popped = this.tail;
            for (let i = 0; i < bound; i++) {
                
            }
            this.length--;
            return popped;
        }
    }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
