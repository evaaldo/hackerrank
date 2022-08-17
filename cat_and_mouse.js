function catAndMouse(x, y, z) {
    let distanceCatA = Math.abs(z - x);
    let distanceCatB = Math.abs(z - y);

    if(distanceCatA < distanceCatB) {
        return 'Cat A'
    } else if(distanceCatB < distanceCatA) {
        return 'Cat B'
    } else if(distanceCatA === distanceCatB) {
        return 'Mouse C'
    }
}