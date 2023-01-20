console.log('Binary Search Tree');

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

    // create a new node
    isEmpty() {
        return this.root === null;
    }

    // insert 

    insert(value) {
        let newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // insertNode function

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            // new node is > root; so add on right

            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }



    // dfs - Depth First Search

    // pre order traversal
    preOrder(root) {
        if (root) {
            // print root
            console.log(root.value);
            // go to left
            this.preOrder(root.left);
            // go to right
            this.preOrder(root.right);
        }
    }

    // in order traversal

    InOrder(root) {
        if (root) {
            // go to left
            this.InOrder(root.left);
            // print root
            console.log(root.value);
            // go to right
            this.InOrder(root.right);
        }
    }


}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);


// bst.preOrder(bst.root);
bst.InOrder(bst.root);

