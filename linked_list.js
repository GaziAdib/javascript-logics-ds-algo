console.log('linked list');

// CLASS NODE

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // add to first 0(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }


    // add to last 0(n)

    append(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node
        }
        this.size++;
    }

    // print linked list

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let current = this.head;
            let listValues = '';
            while (current) {
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }


}

const list = new LinkedList();
console.log('List is Empty', list.isEmpty());
console.log('LIST size', list.getSize());


list.append(10);
list.append(20);
list.append(30);


list.print();


































































// // const n1 = {
// //     data: 100
// // }

// // const n2 = {
// //     data: 200
// // }

// // n1.next = n2

// // console.log(n1);


// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// // const node = new Node(100);
// // console.log(node);

// class LinkedList {

//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     // INSERT FIRST NODE
//     insertFirst(data) {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }


//     // INSERT LAST NODE
//     insertLast(data) {
//         let node = new Node(data);
//         let current;

//         // if empty, make head
//         if (!this.head) {
//             this.head = node;
//         } else {
//             current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }


//     // INSERT AT GIVEN INDEX

//     insertAt(data, index) {
//         // if index is out of range
//         if (index > 0 && index > this.size) {
//             return;
//         }

//         // if first index

//         if (index === 0) {
//             this.head = new Node(data, this.head);
//             return;
//         }

//         const node = new Node(data);

//         let current, previous;

//         // set current to first

//         current = this.head;
//         let count = 0;

//         while (count < index) {
//             previous = current; // Node before index
//             count++;
//             current = current.next; // Node After the index
//         }

//         node.next = current;
//         previous.next = node;
//         this.size++;



//     }

//     // GET At INDEX

//     getAt(index) {
//         let current = this.head;
//         let count = 0;

//         while (current) {
//             if (count == index) {
//                 console.log(current.data);
//             }
//             count++;
//             current = current.next;
//         }

//         return null;
//     }

//     // REMOVE AT Index
//     removeAt(index) {
//         if (index > 0 && index > this.size) {
//             return;
//         }

//         let current = this.head;

//         let previous;

//         let count = 0;

//         // remove first

//         if (index === 0) {
//             this.head = current.next;
//         } else {
//             while (count < index) {
//                 count++;
//                 previous = current;
//                 current = current.next;
//             }

//             previous.next = current.next;
//         }

//         this.size--;
//     }

//     // CLEAR LIST

//     clearList() {
//         this.head = null;
//         this.size = 0
//     }

//     // PRINT LIST

//     printListData() {
//         let current = this.head;

//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }

// }

// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// // ll.insertAt(500, 2);

// // ll.getAt(2);
// // ll.removeAt(2)

// ll.clearList()

// ll.printListData();



// // console.log(ll);