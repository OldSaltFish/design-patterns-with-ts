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

// 工厂注册器，这里的每一个键值其实都可以写成方法，使用对象是多余的（如果不考虑接口约束）

const registry: { [shapeType: string]: ShapeFactory } = {
  circle: new CircleFactory(),
  rectangle: new RectangleFactory(),
  triangle: new TriangleFactory(), // 添加三角形工厂
};
/** 外部可能传入一个字典中没有的字符串，从而导致字典查询结果为undefined，
 * 而如果使用联合类型，外部还需要依赖于这个联合类型，实在不太妥当 */
const createShape = function (shapeType: string): Shape | null {
  const factory = registry[shapeType.toLowerCase()];
  return factory ? factory.createShape() : null;
};

// 只导出一个createShape方法，简化外部的使用。  
export default createShape;

// 应用程序主入口
function main() {
  const circle = createShape("circle");
  const rectangle = createShape("rectangle");
  const triangle = createShape("triangle");

  if (circle && rectangle && triangle) {
    circle.draw();
    rectangle.draw();
    triangle.draw();
  } else {
    console.error("One or more factories were not found.");
  }
}

main();
