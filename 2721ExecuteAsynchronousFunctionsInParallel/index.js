/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
function promiseAll(functions){
  return new Promise((resolve, reject)=>{
    const promiseResults = [];
    const listOfValues = Array(functions.length);
    let somethingWentWrong = false;
    let errorMessage = '';

    for (let i = 0; i < functions.length ; i++){
      functions[i]().then((value) => {
        promiseResults.push(value);
        listOfValues.splice(i, 1, value);
      }).catch(error => {
        somethingWentWrong = true;
        errorMessage = error;
      });
    }

    const intervalId = setInterval(() => {
      if(promiseResults.length === functions.length || somethingWentWrong){
        clearInterval(intervalId);

        if (somethingWentWrong){
          reject(errorMessage);
        }
        resolve(listOfValues);
      }
    },0)
  })
}
