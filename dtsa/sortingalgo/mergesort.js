function mergesort(arr){
    if (arr.length<=1) return arr;
    const mid = Math.floor(arr.length/2);

    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));

    return merge(left,right);
}

function merge(left,right){
    let sortedarr = [];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedarr.push(left.shift());
        }
        else{
            sortedarr.push(right.shift());
        }
    }
    return sortedarr.concat(left,right);
}

let arr = [5, 3, 8, 4, 2, 7, 1];
let sorted = mergesort(arr);

console.log("Original:", arr);
console.log("Sorted:", sorted);