// var obj = {}
// console.log(obj.a)


// var num = 123
// num.abc = 'hello'
// console.log(num.abc);

// var num = new Number(123)
// num.abc = 'hello'
// console.log(num.abc);
// console.log(num * 2);//参与运算时会变数字

// var str = 'abcd'


// var num = 4
// num.len = 3


// var num = new Number(4)
// num.len = 3
// delete num.len

// new Number(4).len//隐式包装类
// console.log(num.len)



var arr = [1,2,3,4,5]
arr.length = 2
console.log(arr.length);

// var str = 'abcd'
// //其实console.log -- 这个new String('abcd').length

// str.length = 2  
// console.log(str.length)


// 面试题
// var str = 'abc'
// str += 1
// var test = typeof(str)//'string'
// if (test.length == 6){
//     //new String(test).length
//     test.sign = 'typeof的返回结果可能为string'
//     //new String(test).sign = 'typeof的返回结果可能为string'
//     //delete
// }
// console.log(test.sign);//new String(test).sign,最后undefined