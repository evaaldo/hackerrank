function simpleArraySum(ar) {
    let sum = 0;

    ar.forEach((element) => {
        sum += element;
    })
    
    return sum;
}