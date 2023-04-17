class MyNode {
    public value: number;
    public next: MyNode | null;
    public prev: MyNode | null;

    constructor(value = null) {
        this.value = value;
    }
}

export class MyLinkedList {
    public head = null;
    public tail = null;

    addStart(n: number) {
        const node: MyNode = new MyNode(n);
        if (this.head === null) this.tail = node;
        else {
            this.head.prev = node;
            node.next = this.head;
        }
        this.head = node;
    }

    addEnd(n: number) {
        const node: MyNode = new MyNode(n);
        if (this.tail === null) this.head = node;
        else {

            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}
