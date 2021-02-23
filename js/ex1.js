/* hw5
Exercise 1 JavaScript code
*/
console.log("Wu's Output from hw5 Exercise 1");

class Square {
    constructor(side) {
        this.side = side;
    }
    perimeter() {
        return this.side * 4
    }
    area() {
        return this.side ** 2;
    }
    diagonal() {
        return Math.sqrt(this.side ** 2 * 2);
    }
    describe() {
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
    }

}
   
const square1 = new Square(5);
const square2 = new Square(9);
const square3 = new Square(16);

console.log(square1.describe());
console.log(square2.describe());
console.log(square3.describe());
