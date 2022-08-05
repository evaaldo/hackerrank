function birthdayCakeCandles(candles) {
    let maxCount = 0;
    let max = 0;
    candles.forEach((candle) => {
        if(candle > max) {
            max = candle;
        }
    })

    candles.forEach((candle) => {
        if(candle == max) {
            maxCount++;
        }
    })

    return maxCount;
}