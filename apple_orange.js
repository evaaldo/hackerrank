//S e T são os pontos que delimitam a casa
//A e B são as posicoes das duas arvores
//apples é a distancia da maçã em relacao a maciera e oranges é a distancia da laranja em relacao a...

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = 0;
    let orangesCount = 0;
    for(let i = 0; i < apples.length; i++) {
        let applesFall = a + apples[i];
        if(applesFall >= s && applesFall <= t) {
            applesCount++
        }
    }

    for(let j = 0; j < oranges.length; j++) {
        let orangesFall = b + oranges[j];
        if(orangesFall <= t && orangesFall >= s) {
            orangesCount++
        }
    }

    console.log(applesCount);
    console.log(orangesCount);
}