/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  let totalGas = 0;
  let currentGas = 0;
  let startPosition = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      startPosition = i + 1;
    }
  }

  return totalGas >= 0 ? startPosition : -1;
}
