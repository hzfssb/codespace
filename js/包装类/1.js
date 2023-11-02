//原始数据类型
let a = 'hello'
let b = 123
let c = true
let d = undefined
let n = null


//引用类型（函数和对象）
let obj = {
    name: '小花'
}
let lw = obj
obj.name = '小红'
console.log(lw.name);
//赋值的时候是指针