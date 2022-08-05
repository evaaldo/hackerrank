function staircase(n) {
    let symbol = "#";
    let inputLine = "";
    let inputPosition = n - 1;

    for(let line = 0; line < n; line++) {
        for(let column = 0; column < n; column++) {
            if(column < inputPosition) {
                inputLine += " ";
            } else {
                inputLine += symbol;
            }
        }
            console.log(inputLine);
            inputLine = "";
            inputPosition -= 1;
    }
}