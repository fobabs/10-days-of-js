/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(lengths) {
    this.lengths = lengths;
  }
  perimeter() {
    return this.lengths.reduce((a, b) => a + b);
  }
}
// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);
let square = new Polygon([3, 3, 3, 3]);
// Print the perimeter
console.log(triangle.perimeter());
console.log(square.perimeter());