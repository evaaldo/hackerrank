function runnerUp(n, arr) {
    let maior = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i];
        }
    }

    let segundaMaior = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > segundaMaior && arr[i] < maior) {
            segundaMaior = arr[i]
        }
    }

    return segundaMaior
}