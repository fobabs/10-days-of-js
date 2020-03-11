function regexVar(str) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  
  let re = new RegExp('\\d+', 'g');
  /*
   * Do not remove the return statement
   */
  return re;
}