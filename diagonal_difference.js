function diagonalDifference(arr) {
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < arr.length; i++) {
        leftSum += arr[i][i];
        rightSum += arr[i][arr.length - 1 - i]
    }

    let absDiff = Math.abs(leftSum - rightSum)

    return absDiff;

}