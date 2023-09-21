/*
* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
* Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
    // Set divisor
    const divisor = arr.length;
    let positiveValues = 0;
    let negativeValues = 0;
    let zeroValues = 0;
    let proportionOfPositiveValues = 0;
    let proportionOfNegativeValues = 0;
    let proportionOfZeroValues = 0;
    
    // Find amounts of positive, negative and zero values
    arr.forEach(element =>{
        if (element < 0){
            negativeValues++;
        } else if ( element === 0){
            zeroValues++;
        } else if ( element > 0){
            positiveValues++;
        }
    })
    
    // Get proportions
    proportionOfNegativeValues = negativeValues / divisor;
    proportionOfZeroValues = zeroValues / divisor;
    proportionOfPositiveValues = positiveValues / divisor;
    
    // Fix values to 6 decimals
    proportionOfNegativeValues = parseFloat(proportionOfNegativeValues.toFixed(6));
    proportionOfZeroValues = parseFloat(proportionOfZeroValues.toFixed(6));
    proportionOfPositiveValues = parseFloat(proportionOfPositiveValues.toFixed(6));
    
    // Log Proportions
    console.log(proportionOfPositiveValues);
    console.log(proportionOfNegativeValues);
    console.log(proportionOfZeroValues);
}
