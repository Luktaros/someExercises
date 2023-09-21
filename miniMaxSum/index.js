/*
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    let minimun = 0;
    let maximum = 0;
    
    // Sort elements 
    let arrCopy = new Array;
    arrCopy = arrCopy.concat(arr);
    
    arrCopy.sort();
    
    // Get minimum
    for (let i = 0; i < arrCopy.length - 1; i++){
        minimun += arrCopy[i];
    }
    
    // Get maximum
    for (let i = arrCopy.length - 1; i > 0; i--){
        maximum += arrCopy[i];
    }
    
    // Log results
    console.log(`${minimun} ${maximum}`);
}
