function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;

    for(let i = 0; (i < a.length) || (i < b.length); i++) {
        
        if(a[i] > b[i]) {
            alicePoints++
        } else if(b[i] > a[i]) {
            bobPoints++
        }
    }
    
    return [alicePoints, bobPoints];
}