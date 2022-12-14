const numsArray = [10, 15, 20, 35, 60, 70, 80]

const binary_search = (array, num) => {

    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {

        let midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (num === array[midIndex]) {
            return midIndex;
        }

        if (num < array[midIndex]) {
            rightIndex = midIndex - 1;

        } else {
            leftIndex = midIndex + 1;
        }

    }
    return -1;

}

const result = binary_search(numsArray, 80);
console.log(result)

// merge sort and quick sort & insertion sort
// linked list create, insert, delete, find
// array operation
// tree bst
// stacks and queue operation
// find duplicate values on js array