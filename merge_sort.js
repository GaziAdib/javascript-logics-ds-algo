// console.log('Merge Sort');

// function mergeSort(arr) {

//     if (arr.length < 2) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const leftArray = arr.slice(0, mid);
//     const rightArray = arr.slice(mid);
//     return merge(mergeSort(leftArray), mergeSort(rightArray));

// }

// function merge(leftArr, rightArr) {
//     const sortedArr = [];
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergeSort(arr));

// // big 0(nlogn)

console.log('merge sort way 2');


const merge = (leftArr, rightArr) => {

    const output = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];


}

// recursive function to divide the array into sub piseces
const mergeSort = (array) => {

    if (array.length <= 1) {
        return array
    }

    // divide two arrays in half
    const midIndex = Math.floor(array.length / 2);

    // slice array for left & right array sub set
    const leftArray = array.slice(0, midIndex);
    const rightArr = array.slice(midIndex);


    return merge(
        mergeSort(leftArray),
        mergeSort(rightArr)
    )


}


console.log(mergeSort([1, 4, 2, 8, 345, 123, 43]));


// console.log(merge([31, 32], [8, 19]))


// [1, 4, 2, 8, 345]
// [1,4,2] [8, 345]

// [1,4] [2]  [8] [345]

// [1] [4] [2] [8] [345]

// [1,4] [2,8], [345]

// [1, 2, 4, 8] [345]
// [1,2,4,8,345]