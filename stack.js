console.log('stack');

// push, pop , peek, isEmpty, search, empty


function CreateStack(maxSize = 10) {

    let stack = [];
    let top = -1;

    // PUSH In Stack
    function push(val) {

        if (top > maxSize - 1) {
            return "stack overflow"
        } else {
            stack.push(val);
            top++;
        }

    }

    // POP Out in Stack

    function pop() {
        if (top > -1) {
            let lastItem = stack[top];
            stack.pop();
            top--;
            return lastItem;
        } else {
            null;
        }
    }

    // SIZE of Stack

    function size() {
        return top + 1;
    }

    // function PEEK

    function peek() {
        if (top > -1) {
            return stack[top];
        } else {
            null;
        }
    }

    // Search in Stack 

    function search(val) {
        let temp = [];
        let found = null;

        while (top > -1) {
            if (stack[top] === val) {
                found = top;
                break;
            }

            temp.push(stack.pop());
            top--;
        }

        const tempLength = temp.length;

        for (let i = 0; i < tempLength; i++) {
            stack.push(temp.pop())
        }

        return found;

    }

    // funciton EMPTY

    function empty() {
        while (top > -1) {
            stack.pop();
            top--;
        }
    }




    // print result
    function print() {
        console.log(stack);
    }

    return {
        push, pop, print, size, peek, search, empty
    }

}

const myStack = CreateStack(500);
myStack.push(1);
myStack.push(2);
myStack.push(3);


// console.log(myStack.peek());
console.log(myStack.search(3));

// empty stack
myStack.empty();

// print
myStack.print();

// time complexity

// 1. push 0(1)
// 2. pop 0(1)
// 3. size 0(1)
// 4. peek 0(1)
// 5. search 0(N)
// 6. empty 0(N)

// application of Stack

// Reverse String
// Browser Execution Stack
// Valid Parenthesis checking
// Syntax parsing