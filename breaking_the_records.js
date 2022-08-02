function breakingRecords(scores) {
    let max = scores[0];
    let breakingMax = 0;
    let min = scores[0];
    let breakingMin = 0;

    scores.forEach((score) => {
        if(score > max) {
            breakingMax++;
            max = score
        }
        if(score < min) {
            breakingMin++;
            min = score;
        }
    })

    return [breakingMax,breakingMin];

}

console.log(breakingRecords([12,24,10,24]));