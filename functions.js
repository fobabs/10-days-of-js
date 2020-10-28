/*
 * Create the function factorial here
 */

// Using the recursion method
function factorial(n) {
  // using the if else statements
  if (n < 0) 
    return -1;
  else if (n == 0)
    return 1;
  else {
    return (n * factorial(n - 1));
  }
}

// Using the while loop method
function factorial(n) {
  let result = n;
  if (n == 0 || n == 1)
    return 1;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}

// Using the for loop method
console.time('for loop');
function factorial(n) {
  if (n == 0 || n == 1)
    return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}