function hurdleRace(k, height) {
    let maxValue = Math.max(...height);
    let diffOfHeight = maxValue - k;
    let counts = 0;
    for(let i = 0; i < height.length; i++) {
        if(k >= height[i]) {
            counts++
        }
    }
    if(counts == height.length) {
        return 0;
    } else {
        return diffOfHeight;
    }
}