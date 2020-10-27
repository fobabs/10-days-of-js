/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

 var nums = [1, 2, 3, 4, 5];
// map method
function modifyArray(nums) {
  return nums.map(n => n % 2 ? n * 3 : n * 2); 
}

// for loop method
function modifyArrayX(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0)
     nums[i] *= 2; 
    else
     nums[i] *= 3;
  }
   return nums;
}
 

// ES6 for of

function modifyArray6(nums) {
for (const n of nums) {
  if (n % 2 != 0) {
   var cur = n * 3
  } else {
    var cur = n * 2;
  }
  var curArr = console.log(cur);

} 

}


var p = modifyArray6(nums);
console.log(p);



