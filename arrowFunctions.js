/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
// map method
function modifyArray(nums) {
  return nums.map(n => n % 2 ? n * 3 : n * 2); 
}

// for loop method
function modifyArrayX(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0)
      nums[i] * 2;
    else
      nums[i] * 3;
  }
  return nums;
}