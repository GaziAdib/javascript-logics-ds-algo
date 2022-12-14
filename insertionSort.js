console.log('Insertion Sort');

// very expensive 0(n^2)

function insertionSort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i; j > 0; j--) {

            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]]
            } else {
                break;
            }

        }

    }

    return array;

}

console.log(insertionSort([1, 4, 2, 8, 43, 31, 63]));


