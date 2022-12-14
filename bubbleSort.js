console.log('Bubble Sort');

// time complexity 

// WORST CASE O(N^2)
// BEST CASE O(N) 

const numArray = [1, 4, 2, 8, 43, 31, 63];


const bubbleSort = (arr) => {

    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;

            }
        }
    } while (swapped)


}

bubbleSort(numArray);

console.log(numArray);