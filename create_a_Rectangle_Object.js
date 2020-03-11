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

// Using ES5 syntax
function Rectangle(a, b) {
	this.length = a;
	this.width = b;
	this.perimeter = 2 * (a + b);
	this.area = a * b;
}