function timeConversion(s) {
    let result = '';
    let hourRevised = Number;
    
    // Get period
    const timeCopy = '';
    const period= timeCopy.slice(7,9);
    
    // Get current hour, minutes and seconds
    const minutesAndSeconds = timeCopy.slice(2,8);
    const hourToRevise = timeCopy.slice(0,2);
    
    if (period === 'AM'){
        if (hourToRevise === 12){
            hourRevised = 00;
        } else {
            hourRevised = hourToRevise;
        }
        
    } else if (period === 'PM'){
        if (hourToRevise < 12){
            hourRevised += 12;
        }
    }
    
    result = result.concat(hourRevised, minutesAndSeconds);
    return result;
}
