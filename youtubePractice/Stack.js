console.log('Tutorial DS Stack');

// complexity

// push 0(1)
// pop 0(1)
// search 0(n);


// push pop empty peek size search, print

class Stack {

    constructor(maxSize = 50) {
        this.maxSize = maxSize;
        this.top = -1;
        this.stack = [];
    }

    // push method

    push(val) {
        if (this.top > this.maxSize - 1) {
            console.log('Stack Overflown');
        } else {
            this.stack.push(val);
            this.top++;
        }
    }


    // pop

    pop() {

        if (this.top > -1) {
            const lastIndex = this.stack[this.top];
            this.stack.pop();
            this.top--;
            return lastIndex
        } else {
            console.log('No Items in Stack!');
            return stack[this.top--];
        }

    }

    // peek

    peek() {
        if (this.top > -1) {
            return this.stack[this.top];
        }

    }

    // empty

    empty() {
        while (this.top > -1) {
            this.stack.pop();
            this.top--;
        }
    }

    // size 

    size() {
        return this.stack.length;
    }

    // search

    optimizedSearch(val) {

        let temp = [];
        let found = null;

        while (this.top > -1) {
            if (this.stack[this.top] == val) {
                found = this.top;
                break;
            }

            temp.push(this.stack.pop());
            this.top--;
        }

        for (let i = 0; i < temp.length; i++) {
            if (temp[i] == val) {
                found = temp[i];
                break;
            }
        }

        return found;

    }


    // search(val) {
    //     return this.stack.find((item) => item == val);
    // }

    // print

    print() {
        console.log(this.stack);
    }

}


const stackObj = new Stack(50);

stackObj.push(5);
stackObj.push(10);
stackObj.push(15);
stackObj.push(20);

stackObj.print();

console.log(stackObj.peek());



// console.log(stackObj.optimizedSearch(15))








