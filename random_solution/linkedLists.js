console.log('Linked Lists');


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add data to linked lists

    add(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

    }

    // remove Elements

    remove(data) {

        let curEl = this.head;

        let prevEl = null;

        while (curEl) {
            if (data === curEl.data) {
                if (!prevEl) {
                    this.head = curEl.next;
                } else {
                    prevEl.next = curEl.next
                }

                this.length--;
                return curEl.data;
            }

            prevEl = curEl;
            curEl = curEl.next;
        }

        return null;

    }

    // print all data 

    print() {

        let currentEl = this.head;
        let container = [];

        while (currentEl) {
            container.push(currentEl.data);
            currentEl = currentEl.next;
        }

        return container;

    }

    // find element by Index

    find(index) {

        let currentEl = this.head;

        let count = 0;

        while (currentEl) {
            if (count === index) {
                return currentEl.data;
            }

            count++;
            currentEl = currentEl.next
        }

        return null;

    }

}

const myList = new LinkedList();

myList.add(7);
myList.add(8);
myList.add(9);

console.log(myList.print())

myList.remove(8);

console.log(myList.print())

console.log(myList.find(0));
