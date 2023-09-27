/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  for (const num of nums){
    let amountOfNum = 0;

    for (const [j, numChecked] of nums.entries()){
      if (num === numChecked){
        amountOfNum++;
        if (amountOfNum > 2){
          nums.splice(j, 1);
        }
      }
    }
  }

  nums.sort((a, b)=>{a - b});

  return nums.length;
};
