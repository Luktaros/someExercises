/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
  let result = {};
  let objIsArray = false;

  if (Array.isArray(obj)){
    objIsArray = true;
    result = [];
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value){
      if ((typeof value === 'object' && value !== null ) || Array.isArray(value)) {
        const deepResult = compactObject(value);

        if(objIsArray){
          result.push(deepResult);
        }else{
          result[key] = deepResult;
        }

      } else  {
        if(objIsArray){
          result.push(value);
        }else{
          result[key] = value;
        }
      }
    }
  }

  return result;
};
