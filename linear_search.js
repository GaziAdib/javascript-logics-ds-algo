


// const linear_search = (array, value) => {

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == value) {
//             return i;
//         }
//     }
//     return -1;
// }

const numsArray = [10, 20, 35, 45, 56, 76, 89];


// const result = linear_search(numsArray, 89);
// // console.log(result);

// if (result == -1) {
//     console.log('element not found');
// } else {
//     console.log(`element found at index ${result}`)
// }

// better approach

const betterLinearSearch = (array, key) => {

    const length = array.length;
    let left = 0;
    let right = length - 1;
    let position = -1;

    while (left < right) {
        if (array[left] == key) {
            position = left;
            console.log(`${key} found at position index ${position}, attepts: ${left + 1}`);
            break;
        }

        if (array[right] == key) {
            position = right;
            console.log(`${key} found at position index ${position}, attepts: ${length - right}`);
            break;
        }
        left++;
        right--;
    }

    if (position == -1) {
        console.log('element not found!');
    }


}

betterLinearSearch(numsArray, 56);

