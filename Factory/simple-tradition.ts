// 抽象工厂接口
export {};
abstract class Shape {
  abstract draw(): void;
}

// 具体形状实现
class Circle extends Shape {
  draw() {
    console.log("Drawing a Circle");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a Rectangle");
  }
}

class Triangle extends Shape {
  draw() {
    console.log("Drawing a Triangle");
  }
}

class ShapeFactory {
  static createCircle(): Shape {
    return new Circle();
  }

  static createRectangle(): Shape {
    return new Rectangle();
  }

  static createTriangle(): Shape {
    return new Triangle();
  }
}


const circle =  ShapeFactory.createCircle();
const rectangle =  ShapeFactory.createRectangle();
const triangle =  ShapeFactory.createTriangle();
circle.draw();
rectangle.draw();
triangle.draw();
