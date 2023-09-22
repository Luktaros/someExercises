/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  let biggestWealth = 0;

  accounts.forEach( person =>{
    let wealth = 0;
    person.forEach( bankAccount => {
      wealth += bankAccount;
    })

    if (wealth > biggestWealth){
      biggestWealth = wealth;
    }
  })

  return biggestWealth;
};
