/*
 * Create the function factorial here
 */

// Using the recursion method
console.time('recursion');
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
console.log(factorial(4));
console.timeEnd('recursion');

// Using the while loop method
console.time('while loop');
function factorialX(n) {
  let result = n;
  if (n == 0 || n == 1)
    return 1;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}
console.log(factorialX(4));
console.timeEnd('while loop');

// Using the for loop method
console.time('for loop');
function factorialY(n) {
  if (n == 0 || n == 1)
    return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
console.log(factorialY(4));
console.timeEnd('for loop');