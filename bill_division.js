//main solution
function bonAppetit(bill, k, b) {
    let sum = 0;
    let final = 0;

    bill.forEach(price => sum += price);
    sum = sum - bill[k];
    final = (sum/2);

    if(final != b) {
        console.log(b - final);
    } else {
        console.log('Bon Appetit');
    }
}

//alternative solution
function bonAppetit(bill, k, b) {
    let notPay = bill[k];
    for(let index = 0; index < bill.length; index++) {
        if(bill[index] === notPay) {
            bill[index] = 0;
        }
    }
    let sum = 0;
    for(let index = 0; index < bill.length; index++) {
        sum += bill[index];
    }
    let charged = (sum/2);
    let actual = (b - charged);
    if(charged != b) {
        console.log(actual);
    } else {
        console.log('Bon Appetit');
    }
}