function kangaroo(x1, v1, x2, v2) {
    let jump1 = x1;
    let jump2 = x2;
    let yesNo = 'NO';
    for(let index = 0; index < 10000; index++) {
        jump1 += v1;
        jump2 += v2;
        if(jump1 === jump2) {
            yesNo = 'YES'
        }
    }
    return yesNo;
}