console.log('Insertion Sort Algorithm');



const numsArray = [1, 4, 7, 2, 5, 9, 15, 20];


const insertionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i; j > 0; j--) {

            if (arr[j - 1] > arr[j]) {

                //swap

                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]

            }

        }

    }

}

insertionSort(numsArray);

console.log(numsArray);