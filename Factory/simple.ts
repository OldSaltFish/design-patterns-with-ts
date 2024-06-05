// 应该只导出工厂注册器
export {};
// 抽象工厂接口
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

// 抽象工厂接口
interface ShapeFactory {
  createShape(): Shape;
}

// 具体工厂实现
class CircleFactory implements ShapeFactory {
  createShape(): Shape {
    return new Circle();
  }
}

class RectangleFactory implements ShapeFactory {
  createShape(): Shape {
    return new Rectangle();
  }
}

class TriangleFactory implements ShapeFactory {
  createShape(): Shape {
    return new Triangle();
  }
}

// 工厂注册器，这里其实可以把工厂类换成create方法，不需要像java一样为了写一个方法要专门写一个类
class FactoryRegistry {
  private static registry: { [shapeType: string]: ShapeFactory } = {
    circle: new CircleFactory(),
    rectangle: new RectangleFactory(),
    triangle: new TriangleFactory(), // 添加三角形工厂
  };

  static getShape(shapeType: string): Shape | null {
    const shapeFactory = this.registry[shapeType];
    return shapeFactory?shapeFactory.createShape():null;
  }
}

// 应用程序主入口
function main() {
  const circle = FactoryRegistry.getShape("circle");
  const rectangle = FactoryRegistry.getShape("rectangle");
  const triangle = FactoryRegistry.getShape("triangle");

  if (circle && rectangle && triangle) {
    circle.draw();
    rectangle.draw();
    triangle.draw();
  } else {
    console.error("One or more factories were not found.");
  }
}

main();
