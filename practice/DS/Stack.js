console.log('Stack DS');

// Push Pop Empty Size Peek Search

class Stack {
    constructor(maxSize = 50) {
        this.maxSize = maxSize;
        this.top = -1;
        this.stack = [];
    }


    // push 
    push(val) {
        if (this.top > this.maxSize - 1) {
            console.log('Stack Over flown');
        } else {
            this.stack.push(val);
            this.top++;
        }
    }

    // pop 

    pop() {
        if (this.top > -1) {
            const lastItem = this.stack[this.top];
            this.stack.pop(lastItem);
            this.top--;
            return lastItem;
        } else {
            console.log('No Items Left to pop from Stack');
        }
    }

    // print values of stack

    print() {
        console.log(stack);
    }

    // search element in stack
    // search(val) {
    //     return this.stack.find((item) => item == val);
    // }

    betterSearch(val) {
        const temp = [];
        let found = null;
        while (this.top > -1) {
            if (this.stack[this.top] == val) {
                found = this.top;
                break;
            }

            temp.push(this.stack.pop());
            this.top--;

        }

        for (let i = 0; i < temp; i++) {
            if (temp[i] == val) {
                found = temp[i];
                break;
            }
        }

        return found;



    }

    // Empty

    empty() {
        while (this.top > -1) {
            this.stack.pop();
            this.top--;
        }
    }

    // size of stack

    size() {
        return this.stack.length;
    }


}

// use of stack

const stack = new Stack(100);

stack.push(10);
stack.push(20);
stack.push(30);

// stack.print();

// stack.pop();

stack.print();

console.log(stack.betterSearch(30))

// console.log(stack.stack);

// console.log(stack.search(20));

// stack.empty();

// console.log(stack.size())
// stack.print();

