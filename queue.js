console.log('Queue Data Structure');

// 1. Enqueue -> Add Element to Queue
// 2. Dequeue -> Remove the oldest element
// 3. peek -> get value from front of queue
// 4. isEmpty -> check the queue is empty
// 5. size -> get  the number of elements in queue
// 6. print -> show the result as output.


class Queue {
    constructor() {
        this.items = [];
    }

    // push in queue
    enqueue(val) {
        this.items.push(val);
    }

    // pop from front in dequeue
    dequeue() {
        return this.items.shift()
    }

    // isEmpty

    isEmpty() {
        return this.items.length === 0;
    }

    //peek

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null;
    }

    // size 

    size() {
        return this.items.length
    }

    // print

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);


// dequeue
queue.dequeue();

// size
console.log(queue.size())

// peek
console.log(queue.peek())

queue.print();