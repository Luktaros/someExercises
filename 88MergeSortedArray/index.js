// Without the use of n

/**
 * @param {array[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  while(nums1.length > m){
    nums1.pop();
  }

  for (const num of nums2) {
    nums1.push(num);
  }

  nums1.sort((a, b) => a - b);
};

// With two while loop, using all parameters

/**
 * @param {array[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  while(nums1.length > m){
    nums1.pop();
  }

  let counter = n - 1;
  while(counter >= 0){
    nums1.push(nums2[counter])
    --counter;
  }

  nums1.sort((a, b) => a - b);
};
