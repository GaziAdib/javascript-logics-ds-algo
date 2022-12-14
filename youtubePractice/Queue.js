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
        this.front = -1;
        this.rear = -1;
        this.items = [];
    }

    // Enqueue at rear

    enqueue(val) {
        if (!this.isFull()) {
            this.rear++;
            this.items[this.rear] = val  // array[i] = 10
        }
    }

    // Dequeue at front
    dequeue() {
        if (!this.isEmpty()) {
            this.front++;
            const element = this.items[this.front];
            this.items.shift();
            return element;

        }
    }



    // IsFull

    isFull() {
        if (this.items.length == this.maxSize) {
            console.log('Queue is full!');
        }
    }

    // isEmpty

    isEmpty() {
        if (this.items.length === 0) {
            console.log('Queue is Empty!');
        }
    }

    // size of queue

    size() {
        return this.items.length;
    }

    // front 

    Front() {
        return this.items[0];
    }

    // Rear

    Rear() {
        return this.items[this.items.length - 1];
    }




    // print

    print() {
        console.log(this.items);
    }



}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);


console.log(queue.Front());

console.log(queue.Rear());

queue.print();



