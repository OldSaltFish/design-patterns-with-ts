export {}
class Singleton {  
  // 静态实例，在类加载时就已经创建  
  private static _instance: Singleton = new Singleton();  

  // 私有构造函数，防止外部通过new Singleton()创建实例  
  private constructor() {  

  }  

  // 获取单例实例的静态方法  
  public static getInstance(): Singleton {  
      return Singleton._instance;  
  }  
  // 禁止外部通过new Singleton()创建实例（如果需要的话）  
  // 这里已经通过私有构造函数做到了  
}  

// 使用示例  
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
// 输出: true，说明通过getInstance()方法获取的实例是同一个
console.log(instance1 === instance2); 