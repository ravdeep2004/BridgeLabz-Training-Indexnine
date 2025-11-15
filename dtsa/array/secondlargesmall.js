function findSecondLargestAndSmallest(arr) {
  if (arr.length < 2) {
    console.log("Not enough elements");
    return;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }

    if (num < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = num;
    } else if (num < secondSmallest && num !== firstSmallest) {
      secondSmallest = num;
    }
  }

  console.log("Largest:", firstLargest);
  console.log("2nd Largest:", secondLargest);
  console.log("Smallest:", firstSmallest);
  console.log("2nd Smallest:", secondSmallest);
}

findSecondLargestAndSmallest([12, 35, 1, 10, 34, 1]);