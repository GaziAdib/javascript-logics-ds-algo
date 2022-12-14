console.log('Queue DS Practice');

// isEmpty(): To check if the queue is empty
// isFull(): To check whether the queue is full or not
// dequeue(): Removes the element from the frontal side of the queue
// enqueue(): It inserts elements to the end of the queue
// Front: Pointer element responsible for fetching the first element from the queue
// Rear: Pointer element responsible for fetching the last element from the queue
// Size - get the size of queue
// print

class Queue {

    constructor(maxSize = 4) {
        this.maxSize = maxSize;
        this.rear = -1;
        this.front = -1;
        this.items = [];
    }

    // enqueue

    betterEnqueue(val) {
        this.rear++;
        this.items[this.rear] = val;

    }

    // enqueue(val) {
    //     this.items.push(val);
    // }

    // dequeue

    betterDequeue() {
        if (!this.isEmpty()) {
            this.front++;
            const element = this.items[this.front];
            this.items.shift();
            return element;
        }
    }

    // dequeue() {
    //     if (this.items.length > 0) {
    //         return this.items.shift();
    //     }
    // }

    // size

    size() {
        return this.items.length;
    }

    // front

    front() {
        return this.items[0];
    }

    // rear

    rear() {
        return this.items[this.items.length - 1];
    }

    // isFull

    isFull() {
        if (this.items.length == this.maxSize) {
            return 'Queue is full'
        }
    }


    // isEmpty

    isEmpty() {
        if (this.items.length == 0) {
            return 'Queue is Empty'
        }
    }

    // print
    print() {
        console.log(this.items);
    }



}

const queueObj = new Queue();

queueObj.betterEnqueue(10);
queueObj.betterEnqueue(20);
queueObj.betterEnqueue(30);

console.log(queueObj.betterDequeue())

console.log(queueObj.betterDequeue())



// console.log(queueObj.size())

// console.log(queueObj.front())

// console.log(queueObj.rear())

// console.log(queueObj.isFull())

// console.log(queueObj.isEmpty())

queueObj.print();


