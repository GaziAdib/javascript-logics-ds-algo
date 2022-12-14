console.log('Binary Search');

// Complexity 

// BST O(logn) best case O(1); 

const numArray = [10, 20, 30, 40, 50];

function binary_search(arr, targetValue) {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {

        let midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (targetValue == arr[midIndex]) {
            return midIndex;
        }
        if (targetValue < arr[midIndex]) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }

    return -1;

}

const result = binary_search(numArray, 40);
console.log(result);