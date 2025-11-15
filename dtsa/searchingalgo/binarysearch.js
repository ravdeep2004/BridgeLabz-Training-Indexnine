function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // found
        }

        if (target < arr[mid]) {
            right = mid - 1;  // search left half
        } else {
            left = mid + 1;   // search right half
        }
    }

    return -1;  // not found
}

console.log(binarySearch([10,20,30,40,50], 40)); // 3
console.log(binarySearch([10,20,30,40,50], 100)); // -1
