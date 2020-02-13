/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  }
  catch (err) {
    console.log(err.message);
  }
  finally {
    return s;
  }
}
console.log(reverseString("1234"));
console.log(reverseString(Number("1234")));