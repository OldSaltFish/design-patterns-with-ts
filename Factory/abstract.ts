// 产品接口
interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

// 具体产品
class WindowsButton implements Button {
  render() {
    console.log("Rendering a Windows button.");
  }
}

class MacButton implements Button {
  render() {
    console.log("Rendering a Mac button.");
  }
}

class WindowsCheckbox implements Checkbox {
  render() {
    console.log("Rendering a Windows checkbox.");
  }
}

class MacCheckbox implements Checkbox {
  render() {
    console.log("Rendering a Mac checkbox.");
  }
}

// 抽象工厂接口
abstract class GUIFactory {
  abstract createButton(): Button;
  abstract createCheckbox(): Checkbox;
}

// 具体工厂
class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }

  createCheckbox() {
    return new MacCheckbox();
  }
}
/** 客户端代码，依赖于抽象工厂和抽象产品 */
function client() {
  const factory: GUIFactory = new WindowsFactory();
  const button: Button = factory.createButton();
  const checkbox: Checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

client();
