function add(a,b,c) {
    return a + b + c
}
//函数的柯里化
function curry(fn) {
    //收集参数用闭包arr.length === fn.length  fn(...arr)，到位了就运行
    //否则就返回收集参数的函数

    //rest 运算符 args是数组 闭包空间 自由变量

    let judge = (...args) => {
       if(args.length === fn.length)return fn(...args)//退出条件
    //    返回函数继续收集参数
       return  (...arg) => judge(...args,...arg)


    }
    return judge


}
// 有时不会一次性给到，前端的交互 js curry 柯里化
//每次接收一个参数
console.log(add.length);
const currAdd = curry(add);
currAdd(1)(2)(3)