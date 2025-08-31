class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  calculateArea() {
    return this.side ** 2;
  }
}

const shapes = [
  new Circle(3),
  new Square(4),
  new Circle(5),
  new Square(2)
];


shapes.forEach((shape, index) => {
  console.log(`Фигура ${index + 1}: Площадь = ${shape.calculateArea().toFixed(2)}`);
});