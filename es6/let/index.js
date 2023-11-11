var a 
console.log(a)
a = 1 //undefined 变量申明提升,let const会报错

let a = 1
if (true){
    console.log(a)
    let a = 2
}  //会报错，暂时性死区。在if的执行上下文中，读到a为undefined，但后续不会到全局执行上下文中找a = 1,你知道家里有钱，但找不到。

const a = 1
a =2 
console.log(a)//报错，const 不能修改值

const obj = {
    name: '军'
}
obj.name = 'chen'
console.log(obj) //可以改，因为是引用类型，存到堆中，因为引用类型可能会很大，所以放到堆中


