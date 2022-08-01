function plusMinus(arr) {
    let posNum = 0;
    let negNum = 0;
    let zeroNum = 0;

    arr.forEach((arrElement) => {
        if(arrElement > 0) {
            posNum++
        } else if(arrElement < 0) {
            negNum++
        } else {
            zeroNum++
        }
    })

    let ratioPositive = (posNum / arr.length).toPrecision(6);
    let ratioNegative = (negNum / arr.length).toPrecision(6);
    let ratioZero = (zeroNum / arr.length).toPrecision(6);

    console.log(ratioPositive);
    console.log(ratioNegative);
    console.log(ratioZero);
}
