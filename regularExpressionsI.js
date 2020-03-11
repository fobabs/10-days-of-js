function regexVar(str) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = /^([aeiou]).*\1$/.test(str);
  /*
  OR
  let re = new RegExp('^([aeiou]).*(\\1)$').test(str);
  */
  /*
   * Do not remove the return statement
   */
  return re;
}