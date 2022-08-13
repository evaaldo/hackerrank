function pageCount(n, p) {
    let frontFlip = Math.floor(p/2);
    let backFlip = Math.floor((n/2) - frontFlip)

    let result = Math.min(frontFlip, backFlip);
    return result;
}