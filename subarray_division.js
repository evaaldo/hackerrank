function birthday(s, d, m) {
    let count = 0;
    let sum = 0;

    for(let i = 0; i <= (s.length - m); i++) {

        for(let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if(sum === d) {
            count++;
        }
        sum = 0;
    }

    return count;
}