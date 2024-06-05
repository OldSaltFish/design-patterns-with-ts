export {}

interface Command {
  execute(): void;
}
/** 接收者 */
class Tv {
  turnOff(): void {
    console.log("Tv off");
  }
  turnOn(): void {
    console.log("Tv on");
  }
}
/** 遥控器命令 */
class TvCommand implements Command {
  public tv: Tv;

  constructor(tv: Tv) {
    this.tv = tv;
  }

  execute(): void {}
}
class TvOnCommand extends TvCommand {
  execute(): void {
    this.tv.turnOn();
    console.log("电视打开了");
  }
}

/** 遥控器 */
class Invoker {
  /** ts中，null没什么作用，只能通过可选变量的方式来延迟内部属性的初始化 */
  private command?: TvCommand;
  /** 遥控器应该有执行命令的方法 */
  /** 遥控器不应该和命令绑定（不符合逻辑），因此不使用构造传参 */
  setCommand(command: TvCommand): void {
    this.command = command;
  }

  action(): void {
    if (this.command) {
      this.command.execute();
    }
  }
}
// tv是一个复杂对象，单独拿出来
const tv = new Tv();
// 遥控器也可以多次使用，单独拿出来，而Command通常是一次性的
const yaokongqi = new Invoker();
yaokongqi.setCommand(new TvOnCommand(tv));
yaokongqi.action();
