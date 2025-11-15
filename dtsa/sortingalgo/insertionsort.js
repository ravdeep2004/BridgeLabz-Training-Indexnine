function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];       // current element
        let j = i - 1;          // previous index

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at the correct position
        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort([5, 2, 4, 6, 1]));
