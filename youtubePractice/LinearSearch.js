// Linear Search 

// Time Complexity worst O(n) avg O(n) best case O(1)

console.log('Linear Search');

const numArray = [10, 20, 30, 40, 50];

const linearSearch = (arr, targetValue) => {

    for (let i = 0; i < arr.length; i++) {

        if (targetValue == arr[i]) {
            return i;
        }

    }

}



const result = linearSearch(numArray, 50);
console.log(result);