console.log('MERGE SORT');




const mergeSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    //do the main works

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);


    return merge(mergeSort(left), mergeSort(right));

}


const merge = (leftArr, rightArr) => {

    const container = [];
    let li = 0; // left array index 0
    let ri = 0; // right array index 0
    while (li < leftArr.length && ri < rightArr.length) {
        if (leftArr[li] < rightArr[ri]) {
            container.push(leftArr[li++]);
        } else {
            container.push(rightArr[ri++]);
        }
    }

    return container.concat(leftArr.slice(li)).concat(rightArr.slice(ri))
}



console.log(mergeSort([4, 0, 1, 9, -1, 3, 5, 2]));


// nlogn -> linear Logarithmic