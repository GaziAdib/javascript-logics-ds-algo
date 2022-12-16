console.log('binary Search Tree');

// BST has left, right and node 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    // INSERT

    insert(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // insertNode Recursion

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // search

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    // pre order traversal (DFS)

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // Inorder Traversal (DFS)

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    // Post order Traversal (DFS)

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right);
            console.log(root.value);
        }
    }


}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// console.log('Tree is Empty? ', bst.isEmpty());

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))



// checking preorder (DFS)

// bst.preOrder(bst.root);


//      10
//   5      15 // output 10 5 3 7 15
// 3    7  


// bst.inOrder(bst.root);


//      10
//   5      15 // output 3 5 7 15 10
// 3    7  

bst.postOrder(bst.root)