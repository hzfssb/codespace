function fn(a){
    console.log(a); // functiona(){},形参 a 与函数内部的函数声明 function a() {} 同名，而函数声明的优先级高于变量声明。
    var a = 123 
    console.log(a)
    function a() {} //函数声明,不用第二步也不执行
    console.log(a);
    var b = function() {} //函数表达式
    console.log(b);//function() {} 
    function d (){}
    var d = a
    console.log(d);//123
}
fn(1)
// AO:{
//     a: undefined  1  functiona(){},
//     b : undefined,
//     d: undefined   functiond(){},
// }
