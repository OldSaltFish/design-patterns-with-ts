export {};
interface Imessage {
  name: string;
  send(message: string): void;
  /** 根据最少知道原则，不直接传入对象的引用，只传入必要信息 */
  receive(name: string, message: string): void;
}

class Mediator {
  private members: Set<Imessage> = new Set();
  register(member: Imessage) {
    this.members.add(member);
  }
  remove(member: Imessage) {
    this.members.delete(member);
    console.log(`群内删除${member.name}`);
  }
  showMembers(): void {
    this.members.forEach((member) => {
      console.log(member.name);
    });
  }
  send(sender: Imessage, message: string): void {
    // 不在群内直接拦截
    if(!this.members.has(sender)){
      console.log(`${sender.name}不在群内，发送失败。`);
      return;
    }
    this.members.forEach((member) => {
      if (member === sender) return;
      member.receive(sender.name, message);
    });
  }
}

class A implements Imessage {
  name: string;
  mediator: Mediator;
  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }
  send(message: string): void {
    console.log(`${this.name}发送消息${message}`);
    this.mediator.send(this, message);
  }
  receive(name: string, message: string): void {
    console.log(`${this.name}收到${name}发来的消息：${message}`);
  }
}
class B implements Imessage {
  name: string = "B";
  mediator: Mediator;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }
  send(message: string): void {
    console.log(`${this.name}发送消息${message}`);
    this.mediator.send(this, message);
  }
  receive(name: string, message: string): void {
    console.log(`${this.name}收到${name}发来的消息：${message}`);
  }
}

function client() {
  const mediator = new Mediator();
  // 这里的命名主要为了体现这些对象之间的弱联系
  // 而不是通常别人喜欢举例的同事这种
  // 如果通信对象比较简单，
  // 可以通过抽象类实现相同的send和receive方法
  const a = new A("凹凸曼", mediator);
  const b = new B("李华", mediator);
  const c = new A("琦玉", mediator);
  mediator.register(a);
  mediator.register(b);
  mediator.register(c);
  mediator.showMembers();
  b.send("你好啊");
  console.log('\n\n');
  mediator.remove(c);
  c.send("我没意见");
  b.send("你好啊");
}
client();
