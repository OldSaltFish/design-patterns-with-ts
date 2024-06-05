class A{
  private a:number = 1
  constructor(){
    console.log('A')
  }
  getA(){
    return this.a
  }
}

const a = new A();
// 对外隐藏了A这个类，也就不需要写私有的构造函数了
export default a;