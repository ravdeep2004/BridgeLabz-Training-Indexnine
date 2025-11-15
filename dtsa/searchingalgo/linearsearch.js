function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // return index when found
        }
    }
    return -1;  // not found
}

console.log(linearSearch([10, 20, 30, 40, 50], 30));  // Output: 2
console.log(linearSearch([10, 20, 30], 100));