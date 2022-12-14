console.log('Bubble Sort');

const numArray = [1, 4, 2, 8, 43, 31, 63];

// TC Best Case o(n)

// worst case O(n^2)


const bubbleSort = (arr) => {

    let swapped;

    do {

        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }

        }

    } while (swapped)

}

bubbleSort(numArray);

console.log(numArray);