function timeConversion(s) {
    let hourString = s.substring(0,2);
    let hourNumber = parseInt(hourString);
    let convertedHour;

    if(s.charAt(8) == "A") {
        if(hourNumber == 12) {
            convertedHour = '00';
        } else {
            hourNumber = hourNumber;
            convertedHour = '0' + hourNumber;
        }
    } 
    
    if(s.charAt(8) == "P") {
        if(hourNumber == 12) {
            convertedHour = '12';
        } else{
            hourNumber += 12;
            convertedHour = hourNumber + '';
        }
    }

    return convertedHour + s.substring(2,8);
}