//对象的创建
var obj = {} //对象自面量|对象直接量
  
let obj = new Object()//构造函数，就像工厂可以批量生成对象

//3.自定义构造函数
function Car(color){
    this.name = 'BMW'
    this.height ='4900'
    this.lang = '4900'
    this.color = color
}
let car1 = new Car('pink')
let car2 = new Car('green')
car1.name = '玛莎'

//4.Object.create()