function miniMaxSum(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum += element
    })

    let max = 0;
    arr.forEach((maxElement) => {
        if(maxElement > max) {
            max = maxElement;
        }
    })

    let min = Infinity;
    arr.forEach((minElement) => {
        if(minElement < min) {
            min = minElement;
        }
    })

    let maxSum = sum - min;
    let minSum = sum - max;

    console.log(minSum, maxSum);

}

miniMaxSum([1,2,3,4,5]);