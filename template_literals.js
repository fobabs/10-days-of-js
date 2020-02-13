/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const [A, P] = expressions;
  // demonstrates using ES7 Exponentiation Operator "**"
  const root = Math.sqrt(P**2 - (16*A));  
  let s1 = (P + root) / 4;
  let s2 = (P - root) / 4;
  return [s1, s2].sort();
}
console.log(sides("literals", ...[140, 48]));