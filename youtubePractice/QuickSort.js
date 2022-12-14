console.log('Quick Sort Algorithms');

const numArray = [10, 60, 45, 70, 55, 40];


// Time COmplexity

// best case Nlogn

// worst n^2


const quickSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]


}

console.log(quickSort(numArray));
