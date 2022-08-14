function migratoryBirds(arr) {
    let counts = {};
    arr.forEach((count) => {
        counts[count] = (counts[count] || 0) + 1;
    });

    const maxValue = Math.max(...Object.values(counts));
    const mostMinRepeat = Object.keys(counts).find((key) => counts[key] === maxValue);

    return mostMinRepeat;
}