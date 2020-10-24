class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`
    }


}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head)
    }
}