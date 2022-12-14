console.log('Quick Sort');

// algorithms
// Time Complexity
// use cases 
// pivot 

// O(1) < 0(logn) < 0(n) < n/2

function quickSort(arr) {


    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }

    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];


}

console.log(quickSort([10, 60, 45, 70, 55, 40])); 
