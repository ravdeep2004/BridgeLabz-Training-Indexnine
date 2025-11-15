function minmaxarray(arr) {
    let max = arr[0];
    let min = arr[0];

    for(i=0; i<arr.length; i++) {
        if(arr[i]>max)
            max=arr[i];
        else if(arr[i]<max)
            min=arr[i];
    }
    return {max, min}
}
console.log(minmaxarray([4,8,8,3,6,1,12,17,3,2,0]));

/* can also be done by using 
arr = [1,2,3,4,5,6];
console.log(Math.max(...arr));
console.log(Math.min(...arr));
*/