/*
 * Complete the Rectangle function
 */
// Using ES6 (ES2015) syntax
class Rectangle {
	constructor(a, b) {
		this.length = a;
		this.width = b;
		this.perimeter = 2 * (a + b);
		this.area = a * b;
	}
}
const rec = new Rectangle(4, 5);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);

// Using ES5 syntax
function Rectangle(a, b) {
	this.length = a;
	this.width = b;
	this.perimeter = 2 * (a + b);
	this.area = a * b;
}
const rec = new Rectangle(4, 5);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);