//manual method 
function revarray(arr) {
    let revarr=[];
    for(i=arr.length-1; i>=0; i--) {
        revarr.push(arr[i]);
    }
    return revarr;
}
console.log(revarray([7,8,9,10,13,17]));


//using two pointers

function reverseusingtwopointers(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
console.log(reverseusingtwopointers([7676,3,6,22,87,12,45]));
