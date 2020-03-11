/**
 *  Return the second largest number in the array.
 *  @param {Number[]} nums - An array of numbers.
 *  @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function
  let sorted = nums.sort(function (a, b) {return a - b;});
  let _sorted = sorted.filter(function (value, index, array) {
    return index === array.indexOf(value);
  });
  return _sorted[_sorted.length - 2];
}

// while loop
function getSecondLargestE(nums) {
  // getting the maximum value
  let max = Math.max.apply(null, nums);
  let maxI = nums.indexOf(max);
  nums[maxI] = -Infinity;
  // returning the second maximum value (if the maximum is duplicated)
  while(max == Math.max.apply(null, nums)) {
    let max = Math.max.apply(null, nums);
    let maxI = nums.indexOf(max);
    nums[maxI] = -Infinity;
  }
  return Math.max.apply(null, nums);
}

//for loop
function getSecondLargestES5(nums) {
  let max = Math.max.apply(null, nums);
  let secondLargestNum;
  let removeLargestNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max) {
      removeLargestNum.push(nums[i]);
    }
  }
  secondLargestNum = Math.max.apply(null, removeLargestNum);
  return secondLargestNum;
}