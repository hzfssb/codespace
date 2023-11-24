//永远不要相信用户的输入，要进行校验
function add(a,b) {
    if(arguments.length !=2) {
        throw new Error('参数错误')
    }
    if(typeof a != 'number' || typeof b != 'number' ) {
        throw new Error('请传入整数')
    }

    return a+b;
}

function memoize(fn) {
    if(typeof fn != 'function') {
        throw new Error('请传入函数')
    }
    var cache = {} //key:value o(1) 空间换时间
    return function() {
        // 唯一性 
        var key = arguments.length  + Array.prototype.join.call (arguments, ",");//arguements是类/伪数组，没有join方法
        console.log(key);
        if (key in cache) {
            return cache[key]
        } else {
            return cache[key] = fn.apply(this,arguments)
        }
       

    }

}
//记忆功能

const memoizedAdd = memoize(add);
memoizedAdd(1,2)
memoizedAdd(1,2)
//js 不严格 编译阶段
// try{
//     console.log(add(1,2))

// }catch(err) {
//     console.log(err)
// }
// console.log('111')
