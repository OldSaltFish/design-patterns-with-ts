export {}
class Singleton {  
  private static _instance: Singleton;  

  /** 私有构造函数，防止外部通过new Singleton()创建实例  */
  private constructor() {
      // 这里可以放置一些初始化代码
  }

  /** 静态方法，用于获取单例实例 */  
  public static getInstance(): Singleton {  
      if (!Singleton._instance) {
          Singleton._instance = new Singleton();
      }
      return Singleton._instance;  
  }  
}  

// 使用示例  
const instance1 = Singleton.getInstance();  
const instance2 = Singleton.getInstance();  

console.log(instance1 === instance2); // 输出: true，因为instance1和instance2是同一个实例
