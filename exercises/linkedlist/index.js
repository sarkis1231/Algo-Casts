// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }

}


class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirtst(data) {
        this.head = new Node(data, this.head);;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node) {

            if (!node.next) {
                return node;
            }
            node = node.next
        }
    }

    removeFirst() {

        if (!this.head) {
            return
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            // There are some exsisting node in our chain
            last.next = new Node(data)
        } else {
            this.head = new Node(data);
        }

    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node
            }

            counter++
            node = node.next;
        }
        return null

    }

    removeAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (index === counter) {
                return delete node.data
            }

            counter++;
            node = node.next

        }
        return null;

    }
}





module.exports = { Node, LinkedList };
